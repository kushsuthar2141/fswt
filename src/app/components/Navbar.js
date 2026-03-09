"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white tracking-tight">
          Kush<span className="text-cyan-400">.</span>dev
        </Link>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-8 text-sm font-medium">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-cyan-400"
                : "text-gray-400 hover:text-white transition-colors"
            }
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={
              pathname === "/projects"
                ? "text-cyan-400"
                : "text-gray-400 hover:text-white transition-colors"
            }
          >
            Projects
          </Link>
          <a
            href="/projects#contact"
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-2 rounded-full transition-all hover:scale-105"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden text-gray-400 hover:text-white text-2xl leading-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-gray-950 border-t border-gray-800 px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/projects"
            onClick={() => setMenuOpen(false)}
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Projects
          </Link>
          <a
            href="/projects#contact"
            onClick={() => setMenuOpen(false)}
            className="text-cyan-400 font-semibold"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
