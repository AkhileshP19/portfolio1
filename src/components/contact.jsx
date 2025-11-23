'use client';

import { useState } from 'react';
import { Mail, Linkedin, Github, ArrowRight, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Form validation schema using Zod
const contactFormSchema = z.object({
  from_name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  reply_to: z
    .string()
    .email('Please enter a valid email address')
    .min(5, 'Email is required'),
  message: z
    .string()
    .min(5, 'Message must be at least 5 characters')
    .max(500, 'Message must be less than 500 characters'),
});

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur', // Validate on blur
  });

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      // Create a form element for EmailJS
      const form = document.createElement('form');
      form.innerHTML = `
        <input name="from_name" value="${data.from_name}" />
        <input name="reply_to" value="${data.reply_to}" />
        <textarea name="message">${data.message}</textarea>
      `;

      // Send email using EmailJS
      await emailjs.sendForm(
        'service_zo9mpnu',
        'template_n1rs50o',
        form,
        '2gFHWbCBQ_FSKhhsW'
      );

      toast.success("Message sent successfully! 🎉");
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-6">
            I'm always interested in hearing about new projects and opportunities.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          <a
            href="mailto:akhileshpatil69@gmail.com"
            className="group bg-card rounded-lg p-6 md:p-8 border border-border hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-center"
          >
            <Mail size={32} className="mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-muted-foreground mb-4 text-sm md:text-base break-words">
              akhileshpatil69@gmail.com
            </p>
            <div className="flex items-center justify-center gap-2 text-primary group-hover:gap-3 transition-all">
              Send Email <ArrowRight size={18} />
            </div>
          </a>

          <a
            href="https://linkedin.com/in/akhileshp19"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card rounded-lg p-6 md:p-8 border border-border hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 text-center"
          >
            <Linkedin size={32} className="mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
            <p className="text-muted-foreground mb-4">@akhileshp19</p>
            <div className="flex items-center justify-center gap-2 text-primary group-hover:gap-3 transition-all">
              Connect <ArrowRight size={18} />
            </div>
          </a>

          <a
            href="https://github.com/AkhileshP19"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card rounded-lg p-6 md:p-8 border border-border hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 text-center"
          >
            <Github size={32} className="mx-auto mb-4 text-pink-400 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">GitHub</h3>
            <p className="text-muted-foreground mb-4">@AkhileshP19</p>
            <div className="flex items-center justify-center gap-2 text-primary group-hover:gap-3 transition-all">
              Follow <ArrowRight size={18} />
            </div>
          </a>
        </div>

        {/* Contact Form */}
        <form
          id="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          className="bg-card rounded-lg p-6 md:p-8 border border-border mt-16 shadow-md"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Send Me a Message
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Name Field */}
            <div className="flex flex-col">
              <label className="font-medium mb-2 text-sm md:text-base">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register('from_name')}
                disabled={loading}
                className={`p-3 border rounded-lg bg-background transition-colors ${
                  errors.from_name
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-border focus:border-primary'
                } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                placeholder="Enter your name"
              />
              {errors.from_name && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  {errors.from_name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label className="font-medium mb-2 text-sm md:text-base">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                {...register('reply_to')}
                disabled={loading}
                type="email"
                className={`p-3 border rounded-lg bg-background transition-colors ${
                  errors.reply_to
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-border focus:border-primary'
                } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                placeholder="Enter your email"
              />
              {errors.reply_to && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  {errors.reply_to.message}
                </p>
              )}
            </div>
          </div>

          {/* Message Field */}
          <div className="flex flex-col mt-4 md:mt-6">
            <label className="font-medium mb-2 text-sm md:text-base">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register('message')}
              disabled={loading}
              rows={5}
              className={`p-3 border rounded-lg bg-background transition-colors resize-none ${
                errors.message
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-border focus:border-primary'
              } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              placeholder="Write your message..."
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`mt-6 w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold border border-border transition-all flex items-center justify-center gap-2 ${
              loading
                ? 'opacity-70 cursor-not-allowed'
                : 'hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]'
            }`}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <ArrowRight size={18} />
              </>
            )}
          </button>

          {/* Form Info */}
          <p className="text-center text-muted-foreground text-sm mt-4">
            All fields are required. Your information is safe with me.
          </p>
        </form>

        {/* Bottom Section */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 md:p-8 border border-border text-center mt-16">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Open to Opportunities
          </h3>
          <p className="text-muted-foreground mb-6 text-sm md:text-base">
            I'm actively looking for exciting projects and collaborations. Feel free to reach out!
          </p>
          <a
            href="#contact-form"
            className="inline-block px-6 md:px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}