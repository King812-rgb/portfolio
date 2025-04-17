import { useState } from "react";
import SocialLinks from "./SocialLinks";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // 成功・エラーメッセージ用

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Contact</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-gray-900 p-6 rounded-lg shadow-md text-white"
      >
        {/* Name */}
        <label htmlFor="name" className="block">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-gray-500"
          required
        />

        {/* Email */}
        <label htmlFor="email" className="block mt-4">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-gray-500"
          required
        />

        {/* Phone */}
        <label htmlFor="phone" className="block mt-4">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-gray-500"
          required
        />

        {/* Message */}
        <label htmlFor="message" className="block mt-4">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-gray-500"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="block cursor-pointer w-2/3 mx-auto mt-6 p-3 text-lg font-bold text-white rounded-lg shadow-lg bg-gray-800 text-center"
        >
          Send Message
        </button>

        {/* Status Message */}
        {status && <p className="text-white text-center mt-4">{status}</p>}
      </form>
      <SocialLinks />
    </>
  );
}
