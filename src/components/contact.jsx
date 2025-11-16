'use client';

import { useState } from 'react';
import { Mail, Linkedin, Github, ArrowRight, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "523a088a-7b02-4001-b0b2-2fe1a6e5aabd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully! 🎉");
        e.target.reset();
      } else {
        toast.error(data.message || "Failed to send message.");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
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
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="mailto:akhileshpatil69@gmail.com"
            className="group bg-card rounded-lg p-8 border border-border hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-center"
          >
            <Mail size={32} className="mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-muted-foreground mb-4">akhileshpatil69@gmail.com</p>
            <div className="flex items-center justify-center gap-2 text-primary group-hover:gap-3 transition-all">
              Send Email <ArrowRight size={18} />
            </div>
          </a>

          <a
            href="https://linkedin.com/in/akhileshp19"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card rounded-lg p-8 border border-border hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 text-center"
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
            className="group bg-card rounded-lg p-8 border border-border hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 text-center"
          >
            <Github size={32} className="mx-auto mb-4 text-pink-400 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">GitHub</h3>
            <p className="text-muted-foreground mb-4">@AkhileshP19</p>
            <div className="flex items-center justify-center gap-2 text-primary group-hover:gap-3 transition-all">
              Follow <ArrowRight size={18} />
            </div>
          </a>
        </div>

        {/* Custom Contact Form */}
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="bg-card rounded-lg p-8 border border-border mt-16 shadow-md"
        >
          <h3 className="text-3xl font-bold mb-6 text-center">Send Me a Message</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="font-medium mb-1">Name</label>
              <input
                required
                name="name"
                className="p-3 border rounded-lg bg-background"
                placeholder="Enter your name"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium mb-1">Email</label>
              <input
                required
                name="email"
                type="email"
                className="p-3 border rounded-lg bg-background"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="flex flex-col mt-4">
            <label className="font-medium mb-1">Message</label>
            <textarea
              required
              name="message"
              rows={5}
              className="p-3 border rounded-lg bg-background"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`mt-6 w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold border border-border transition-all cursor-pointer flex items-center justify-center gap-2 ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
            }`}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {/* Bottom Section */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-8 border border-border text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Open to Opportunities</h3>
          <p className="text-muted-foreground mb-6">
            I'm actively looking for exciting projects and collaborations. Feel free to reach out!
          </p>
          <a
            href="#contact-form"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
