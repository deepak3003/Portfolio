import React, { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <div className="max-w-xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Contact
        </h3>

        {submitted ? (
          <div className="text-green-600 font-semibold text-center">
            ✅ Thanks! Your message has been sent.
          </div>
        ) : (
          <form
            action="https://formspree.io/f/mdkdagyl" // ✅ Your actual form ID is correct
            method="POST"
            className="space-y-5"
            onSubmit={() => {
              // Let the form submit and show thank you *after* a short delay
              setTimeout(() => setSubmitted(true), 300);
            }}
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded min-h-[120px]"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
