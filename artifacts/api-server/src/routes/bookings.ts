import { Router } from "express";
import fs from "fs/promises";
import path from "path";
import { CreateBookingBody } from "@workspace/api-zod";

const router = Router();
const JSON_DB_PATH = path.resolve(process.cwd(), "bookings.json");

router.post("/bookings", async (req, res) => {
  try {
    // 1. Validate incoming data
    const parseResult = CreateBookingBody.safeParse(req.body);
    if (!parseResult.success) {
      res.status(400).json({ error: "Invalid booking request", details: parseResult.error.format() });
      return;
    }

    const { name, phone, grade, message } = parseResult.data;

    // 2. Determine storage mechanism
    if (process.env.DATABASE_URL) {
      try {
        const { db, bookingsTable } = await import("@workspace/db");
        const [inserted] = await db.insert(bookingsTable).values({
          name,
          phone,
          grade,
          message: message || null,
        }).returning();

        res.status(201).json({
          id: inserted.id,
          name: inserted.name,
          phone: inserted.phone,
          grade: inserted.grade,
          message: inserted.message,
          createdAt: inserted.createdAt.toISOString(),
        });
        return;
      } catch (dbError) {
        req.log.error({ err: dbError }, "Database insertion failed, attempting local JSON fallback");
      }
    }

    // JSON Fallback
    req.log.info("Using local JSON file fallback database.");
    let bookings: any[] = [];
    try {
      const fileData = await fs.readFile(JSON_DB_PATH, "utf-8");
      bookings = JSON.parse(fileData);
    } catch (e) {
      // File doesn't exist yet, we'll create it
    }

    const newBooking = {
      id: bookings.length > 0 ? Math.max(...bookings.map((b) => b.id)) + 1 : 1,
      name,
      phone,
      grade,
      message: message || null,
      createdAt: new Date().toISOString(),
    };

    bookings.push(newBooking);
    await fs.writeFile(JSON_DB_PATH, JSON.stringify(bookings, null, 2), "utf-8");

    res.status(201).json(newBooking);
  } catch (error) {
    req.log.error({ err: error }, "Unhandled error in booking creation");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
