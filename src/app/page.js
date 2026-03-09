import Link from "next/link";

const skills = [
  {
    name: "MongoDB",
    icon: "🍃",
    color: "from-green-500/20 to-green-500/5",
    border: "border-green-500/30",
  },
  {
    name: "Express.js",
    icon: "⚡",
    color: "from-yellow-500/20 to-yellow-500/5",
    border: "border-yellow-500/30",
  },
  {
    name: "React.js",
    icon: "⚛️",
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/30",
  },
  {
    name: "Node.js",
    icon: "🟢",
    color: "from-lime-500/20 to-lime-500/5",
    border: "border-lime-500/30",
  },
  {
    name: "JavaScript",
    icon: "🔥",
    color: "from-yellow-400/20 to-yellow-400/5",
    border: "border-yellow-400/30",
  },
  {
    name: "HTML & CSS",
    icon: "🎨",
    color: "from-orange-500/20 to-orange-500/5",
    border: "border-orange-500/30",
  },
  {
    name: "Git & GitHub",
    icon: "🔧",
    color: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/30",
  },
  {
    name: "Tailwind CSS",
    icon: "💨",
    color: "from-sky-500/20 to-sky-500/5",
    border: "border-sky-500/30",
  },
];

const stats = [
  { label: "University", value: "Silveroak University" },
  { label: "Specialization", value: "MERN Stack" },
  { label: "Focus", value: "Full-Stack Dev" },
  { label: "Status", value: "Open to Work" },
];

export default function Home() {
  return (
    <main className="pt-16">
      {/* ── Hero ── */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-5xl mx-auto w-full py-28">
          <p className="text-cyan-400 font-mono text-sm mb-4 tracking-widest uppercase">
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white leading-tight mb-4">
            Kush
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              Suthar
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-400 mb-6">
            MERN Stack Developer
          </h2>
          <p className="text-gray-400 max-w-lg text-lg leading-relaxed mb-10">
            I build full-stack web applications using MongoDB, Express.js,
            React, and Node.js. Currently pursuing my degree at{" "}
            <span className="text-cyan-400 font-medium">
              Silveroak University
            </span>
            .
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-3 rounded-full transition-all hover:scale-105"
            >
              View Projects →
            </Link>
            <a
              href="#about"
              className="border border-gray-700 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 font-medium px-8 py-3 rounded-full transition-all"
            >
              About Me
            </a>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
          <div className="w-16 h-1 bg-cyan-400 rounded mb-10"></div>
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                I&apos;m a passionate web developer and a student at{" "}
                <strong className="text-white">Silveroak University</strong>. I
                specialize in building modern, responsive, and high-performance
                web applications using the MERN stack.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                I love turning ideas into real products — from designing clean
                UIs with React and Tailwind CSS to building robust REST APIs
                with Node.js and Express, backed by MongoDB.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                I&apos;m always learning, currently diving deeper into Next.js,
                TypeScript, and cloud deployment with Vercel.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-cyan-500/50 transition-colors"
                >
                  <p className="text-cyan-400 text-xs uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-white font-semibold text-sm">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2">
            Skills &amp; Technologies
          </h2>
          <div className="w-16 h-1 bg-cyan-400 rounded mb-10"></div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`bg-linear-to-br ${skill.color} border ${skill.border} rounded-xl p-5 text-center hover:scale-105 transition-transform cursor-default`}
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <p className="text-white font-semibold text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to see my work?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Check out the projects I&apos;ve built and get in touch.
          </p>
          <Link
            href="/projects"
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-10 py-4 rounded-full text-lg transition-all hover:scale-105 inline-block"
          >
            View Projects &amp; Contact →
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-8 px-6 border-t border-gray-800 text-center text-gray-600 text-sm">
        © 2026 Kush Suthar · Built with Next.js &amp; Tailwind CSS
      </footer>
    </main>
  );
}
