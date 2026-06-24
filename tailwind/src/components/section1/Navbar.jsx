import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg">

        {/* Navbar */}
        <div className="flex items-center justify-between px-6 md:px-8 py-4">

          {/* Logo */}
          <h1 className="text-3xl font-bold tracking-wide text-black">
            Nex Learn
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <a
              href="#home"
              className="relative text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>

            <a
              href="#about"
              className="relative text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </a>
            <a
              href="#services"
              className="relative text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              Services
            </a>

            <a
              href="#skills"
              className="relative text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="relative text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Let's Talk
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t border-gray-300 px-6 py-5">

            <div className="flex flex-col gap-5">

              <a
                href="#home"
                onClick={() => setOpen(false)}
                className="text-black hover:text-gray-600"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="text-black hover:text-gray-600"
              >
                About
              </a>

              <a
                href="#services"
                onClick={() => setOpen(false)}
                className="text-black hover:text-gray-600"
              >
                Services
              </a>

              <a
                href="#skills"
                onClick={() => setOpen(false)}
                className="text-black hover:text-gray-600"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={() => setOpen(false)}
                className="text-black hover:text-gray-600"
              >
                Projects
              </a>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="text-black hover:text-gray-600"
              >
                Contact
              </a>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-black text-white px-5 py-3 rounded-full text-center hover:bg-gray-800 transition"
              >
                Let's Talk
              </a>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;