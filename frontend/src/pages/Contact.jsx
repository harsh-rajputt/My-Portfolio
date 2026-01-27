import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await axios.post(`${API_URL}/api/v1/contacts/create`, formData);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 pt-32 pb-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-semibold mb-6">
            Let’s <span className="text-pink-500">Connect</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-md">
            Have an idea, project, or just want to say hi?  
            Drop a message — I reply fast 🚀
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-pink-500 text-xl" />
              <span>your@email.com</span>
            </div>

            <div className="flex gap-6 text-xl">
              <a href="https://github.com" target="_blank" className="hover:text-pink-500"><FaGithub /></a>
              <a href="https://linkedin.com" target="_blank" className="hover:text-pink-500"><FaLinkedin /></a>
              <a href="https://twitter.com" target="_blank" className="hover:text-pink-500"><FaTwitter /></a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-neutral-900 border border-white/10 p-10 rounded-xl"
        >
          {["name", "email", "subject"].map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={field.toUpperCase()}
              required
              className="w-full mb-5 px-5 py-4 bg-black border border-white/10 rounded outline-none focus:border-pink-500"
            />
          ))}

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="MESSAGE"
            rows="5"
            required
            className="w-full mb-6 px-5 py-4 bg-black border border-white/10 rounded outline-none focus:border-pink-500"
          />

          {status && (
            <p className={`mb-4 ${status === "success" ? "text-green-400" : "text-red-400"}`}>
              {status === "success" ? "Message sent successfully!" : "Failed to send message"}
            </p>
          )}

          <button
            disabled={loading}
            className="w-full py-4 bg-pink-500 text-black font-semibold rounded hover:bg-pink-600 transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
