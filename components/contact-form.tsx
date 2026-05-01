"use client";

import { useState } from "react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";

import { MagicButton } from "@/components/ui/magic-button";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Your message has been sent successfully!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl border border-white/[0.1] bg-black-100 p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
        >
          <FaTimes size={20} />
        </button>

        <h2 className="mb-6 text-center text-2xl font-bold text-white">
          Get In Touch
        </h2>

        <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/[0.1] bg-black-200 px-4 py-3 text-white placeholder-gray-500 focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple/20"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/[0.1] bg-black-200 px-4 py-3 text-white placeholder-gray-500 focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple/20"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-300">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/[0.1] bg-black-200 px-4 py-3 text-white placeholder-gray-500 focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple/20"
              placeholder="Subject of your message"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-lg border border-white/[0.1] bg-black-200 px-4 py-3 text-white placeholder-gray-500 focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple/20 resize-none"
              placeholder="Your message here..."
            />
          </div>

          {submitStatus.type && (
            <div
              className={`rounded-lg p-4 text-sm ${
                submitStatus.type === "success"
                  ? "bg-green-500/20 border border-green-500/50 text-green-400"
                  : "bg-red-500/20 border border-red-500/50 text-red-400"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <div className="flex gap-4">
            <MagicButton
              title={isSubmitting ? "Sending..." : "Send Message"}
              icon={<FaLocationArrow />}
              position="right"
              handleClick={() => {
                const form = document.getElementById('contact-form') as HTMLFormElement;
                if (form && !isSubmitting) {
                  handleSubmit(new Event('submit') as any);
                }
              }}
              otherClasses="flex-1"
            />
            <MagicButton
              title="Cancel"
              handleClick={onClose}
              otherClasses="flex-1 !bg-gray-700 hover:!bg-gray-600"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
