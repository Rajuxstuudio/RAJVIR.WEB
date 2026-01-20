import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Loader2,
  Instagram,
  Linkedin,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

import profileAvatar from "@/assets/profile-avatar.png";

interface ServiceRequestFormProps {
  defaultService?: string;
}

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/raj._.ux",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/rajveer11/",
    label: "LinkedIn",
  },
  {
    icon: MessageCircle,
    href: "https://wa.me/918005883696",
    label: "WhatsApp",
  },
  {
    icon: Mail,
    href: "mailto:rajuxstudio@gmail.com",
    label: "Email",
  },
];

// ✅ Your Formspree endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjggyzej";

const ServiceRequestForm = ({ defaultService }: ServiceRequestFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: defaultService || "",
    details: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.service || !formData.details) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed");

      toast({
        title: "Request sent!",
        description:
          "Thanks for reaching out. I’ll get back to you within 24–48 hours.",
      });

      setFormData({
        name: "",
        email: "",
        service: defaultService || "",
        details: "",
      });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container mx-auto">
      <div className="p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* ================= LEFT COLUMN (DESKTOP ONLY) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:block py-8"
        >
          <div className="text-left mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">
              Ready to get started?
            </h2>
            <p className="text-sm text-muted-foreground">
              All project details shared through this form are reviewed personally.
            </p>
          </div>
          {/* Contact Info */}
          <div className="space-y-3 mb-8">
            <a
              href="tel:+918005883696"
              className="flex items-center gap-3 text-sm hover:text-primary"
            >
              <Phone className="w-4 h-4" />
              +91 80058 83696
            </a>

            <a
              href="mailto:rajuxstudio@gmail.com"
              className="flex items-center gap-3 text-sm hover:text-primary"
            >
              <Mail className="w-4 h-4" />
              rajuxstudio@gmail.com
            </a>
          </div>
          <div className="space-y-8">
            {/* Profile */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-muted">
                <img
                  src={profileAvatar}
                  alt="Rajveer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">Rajveer</p>
                <p className="text-sm text-muted-foreground">
                  Product Designer & Developer
                </p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-muted hover:border-primary/30 transition-all"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT COLUMN (FORM) ================= */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="
    w-full
    lg:max-w-xl
    lg:mx-auto
    p-8
    rounded-3xl
    bg-card
    border border-border/50
    shadow-bento
  "
>
  <form onSubmit={handleSubmit} className="space-y-6">
    {/* Honeypot */}
    <input type="text" name="_gotcha" className="hidden" />

    {/* Intro text */}
    <p className="text-muted-foreground">
      Tell me a bit about your project — I’ll get back with clarity,
      timelines, and next steps.
    </p>

    {/* Name + Email */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label>Name</Label>
        <Input
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="h-12 rounded-xl"
        />
      </div>

      <div className="space-y-2">
        <Label>Email</Label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="h-12 rounded-xl"
        />
      </div>
    </div>

    {/* Service */}
    <div className="space-y-2">
      <Label>Service Needed</Label>
      <Input
        value={formData.service}
        onChange={(e) =>
          setFormData({ ...formData, service: e.target.value })
        }
        className="h-12 rounded-xl"
      />
    </div>

    {/* Details */}
    <div className="space-y-2">
      <Label>Project Details</Label>
      <Textarea
        value={formData.details}
        onChange={(e) =>
          setFormData({ ...formData, details: e.target.value })
        }
        className="min-h-[150px] rounded-xl resize-none"
      />
    </div>

    {/* Submit */}
    <Button
      variant="hero"
      type="submit"
      disabled={isSubmitting}
      className="w-full h-14 rounded-xl text-lg font-semibold"
    >
      {isSubmitting ? (
        <>
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send className="w-5 h-5 mr-2" />
          Send Request
        </>
      )}
    </Button>

    {/* Helper text */}
    <p className="text-center text-sm text-muted-foreground">
      Or reach out directly
    </p>
  </form>
</motion.div>

      </div>

      {/* ================= MOBILE BOTTOM BAR ================= */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border p-4 flex gap-3 lg:hidden">
        <a
          href="tel:+918005883696"
          className="flex-1 h-12 rounded-xl border border-border flex items-center justify-center gap-2 font-medium"
        >
          <Phone className="w-4 h-4" />
          Call
        </a>

        <a
          href="mailto:rajuxstudio@gmail.com"
          className="flex-1 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center gap-2 font-medium"
        >
          <Mail className="w-4 h-4" />
          Email
        </a>
      </div>
    </section>
  );
};

export default ServiceRequestForm;
