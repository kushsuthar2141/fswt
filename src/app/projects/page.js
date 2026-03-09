"use client";
import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce app with product listings, cart management, user authentication, and order management. Built with React, Node.js, Express, and MongoDB.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    github: "https://github.com/kushsuthar2141",
    demo: "#",
    color: "from-cyan-500/10",
  },
  {
    title: "Task Manager App",
    description:
      "A productivity app with full CRUD operations, user authentication with JWT, task boards, and deadline tracking. REST API built with Express and MongoDB.",
    tags: ["React", "Express", "MongoDB", "JWT"],
    github: "https://github.com/kushsuthar2141",
    demo: "#",
    color: "from-blue-500/10",
  },
  {
    title: "Blog Platform",
    description:
      "A full-featured blog platform with rich text editing, comment system, and category filtering. Uses Next.js with server-side rendering and MongoDB.",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "Node.js"],
    github: "https://github.com/kushsuthar2141",
    demo: "#",
    color: "from-violet-500/10",
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat app with Socket.io, private rooms, online status indicators, and persistent message history stored in MongoDB.",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    github: "https://github.com/kushsuthar2141",
    demo: "#",
    color: "from-emerald-500/10",
  },
];

export default function Projects() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate with EmailJS / backend API before going live
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="pt-16">
      {/* ── Projects ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-cyan-400 font-mono text-sm mb-2 tracking-widest uppercase">
            My Work
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
            Projects
          </h1>
          <div className="w-16 h-1 bg-cyan-400 rounded mb-10"></div>

          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`bg-linear-to-br ${project.color} to-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all group`}
              >
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-800 text-cyan-300 border border-gray-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm font-medium">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <p className="text-cyan-400 font-mono text-sm mb-2 tracking-widest uppercase">
            Get In Touch
          </p>
          <h2 className="text-4xl font-extrabold text-white mb-2">
            Contact Me
          </h2>
          <div className="w-16 h-1 bg-cyan-400 rounded mb-10"></div>

          <div className="grid sm:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                I&apos;m open to freelance opportunities, internships, and
                collaborations. If you have a project in mind or just want to
                say hello, feel free to reach out!
              </p>
              <div className="space-y-4">
                {[
                  { label: "University", value: "Silveroak University" },
                  { label: "Email", value: "kushsuthar2141@gmail.com" },
                  {
                    label: "GitHub",
                    value: "github.com/kushsuthar2141",
                  },
                  { label: "Location", value: "Gujarat, India" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <span className="text-cyan-400 font-medium w-24 shrink-0">
                      {item.label}:
                    </span>
                    <span className="text-gray-300 break-all">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="flex gap-4 mt-8">
                <a
                  href="https://github.com/kushsuthar2141"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 px-5 py-2 rounded-full text-sm font-medium transition-all"
                >
                  GitHub
                </a>
                <a
                  href="mailto:kushsuthar2141@gmail.com"
                  className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 px-5 py-2 rounded-full text-sm font-medium transition-all"
                >
                  Email
                </a>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {status === "success" && (
                <div className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-3 rounded-xl text-sm">
                  ✓ Message sent! I&apos;ll get back to you soon.
                </div>
              )}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="bg-gray-800 border border-gray-700 focus:border-cyan-500 text-white placeholder-gray-500 px-4 py-3 rounded-xl outline-none transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-gray-800 border border-gray-700 focus:border-cyan-500 text-white placeholder-gray-500 px-4 py-3 rounded-xl outline-none transition-colors"
              />
              <textarea
                rows={5}
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className="bg-gray-800 border border-gray-700 focus:border-cyan-500 text-white placeholder-gray-500 px-4 py-3 rounded-xl outline-none transition-colors resize-none"
              />
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-xl transition-all hover:scale-[1.02]"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-8 px-6 border-t border-gray-800 text-center text-gray-600 text-sm">
        © 2026 Kush Suthar · Built with Next.js &amp; Tailwind CSS
      </footer>
    </main>
  );
}
