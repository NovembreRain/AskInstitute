import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateBooking } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("");
  const [message, setMessage] = useState("");

  const { mutate, isPending } = useCreateBooking();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast({
        title: "Name required",
        description: "Please enter the student's name.",
        variant: "destructive",
      });
      return;
    }

    if (!phone.trim() || phone.trim().length < 10) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit mobile number.",
        variant: "destructive",
      });
      return;
    }

    if (!grade.trim()) {
      toast({
        title: "Class/Grade required",
        description: "Please enter the student's current grade.",
        variant: "destructive",
      });
      return;
    }

    mutate({
      data: {
        name: name.trim(),
        phone: phone.trim(),
        grade: grade.trim(),
        message: message.trim() || undefined,
      }
    }, {
      onSuccess: () => {
        toast({
          title: "Request Submitted! 🎉",
          description: "We have received your demo request and will call you back within 24 hours.",
        });
        setName("");
        setPhone("");
        setGrade("");
        setMessage("");
      },
      onError: (err: any) => {
        toast({
          title: "Submission Failed",
          description: err?.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              Admissions Open 2026-27
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Journey With Us</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Have questions about our programs or want to book a free demo class? Reach out to us. We're here to help you make the best educational choice.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                  <p className="text-muted-foreground">No. 23, 8th cross, Brindavanam<br />Puducherry 605013</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                  <p className="text-muted-foreground">9994901111</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Working Hours</h4>
                  <p className="text-muted-foreground">Mon - Sat: 4:00 PM - 8:30 PM<br />Sun: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-muted/30 p-8 rounded-3xl border border-border/50"
          >
            <h3 className="text-2xl font-bold mb-6">Request a Call Back</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-medium mb-1.5 block text-foreground/80">Student's Name</label>
                <Input
                  placeholder="Enter name"
                  className="bg-background border-border/50 h-12"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isPending}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block text-foreground/80">Phone Number</label>
                  <Input
                    placeholder="10-digit mobile number"
                    className="bg-background border-border/50 h-12"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={isPending}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block text-foreground/80">Class/Grade</label>
                  <Input
                    placeholder="e.g. Class 10"
                    className="bg-background border-border/50 h-12"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    disabled={isPending}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block text-foreground/80">Message (Optional)</label>
                <Textarea
                  placeholder="Any specific requirements?"
                  className="bg-background border-border/50 min-h-[120px] resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isPending}
                />
              </div>
              <Button
                type="submit"
                disabled={isPending}
                className="w-full h-12 text-base bg-primary text-primary-foreground hover:bg-primary/90 mt-4 flex items-center justify-center gap-2"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Request"
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
