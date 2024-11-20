"use client"
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Add form submission logic
    alert("Thank you for contacting us! We'll respond shortly.");
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
        <p className="text-gray-400 text-center mb-8">
          Have a question or need help? Fill out the form below, and we’ll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="mt-2 block w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="mt-2 block w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block font-medium text-gray-300">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="mt-2 block w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block font-medium text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows={5}
              cols={10}
              className="mt-2 block w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-600 text-white font-semibold py-3 px-8 rounded-md shadow hover:bg-blue-500 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
