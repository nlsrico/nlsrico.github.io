'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full px-6 md:px-16 py-6 bg-[#0f0f0f] text-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo / Initials */}
        <div className="text-xl font-bold tracking-wide">NJ.</div>

        {/* Navigation Links */}
        <nav className="space-x-6 text-sm font-medium">
          <Link href="#projects" className="hover:text-gray-400 transition">Projects</Link>
          <Link href="#resume" className="hover:text-gray-400 transition">Resume</Link>
          <Link href="#contact" className="hover:text-gray-400 transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}