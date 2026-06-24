import React from "react";
import { navLinks, socials } from "./footerData";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 md:pt-24">

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="rounded-[30px] md:rounded-[40px] border border-zinc-700 bg-gray-200 text-black px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 text-center">

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            Let's Build
            <br />
            Something Amazing
          </h2>

          <p className="text-gray-600 text-base sm:text-lg lg:text-xl mt-6 max-w-3xl mx-auto leading-7 sm:leading-9">
            From idea to deployment, I create fast, scalable and beautiful web
            experiences that leave a lasting impression.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center mt-10 bg-black text-white px-6 sm:px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300"
          >
            Let's Talk
          </a>

        </div>

      </div>

      {/* Footer Content */}

      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-16 md:mt-24">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Logo */}

          <div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black">
              NEX DEV
            </h1>

            <p className="text-zinc-500 leading-7 mt-6 max-w-sm">
              Building modern digital experiences with React, Tailwind CSS and
              creative UI design.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Navigation
            </h3>

            <div className="space-y-4">

              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-zinc-400 hover:text-white transition duration-300"
                >
                  {item}
                </a>
              ))}

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Connect
            </h3>

            <div className="space-y-4">

              {socials.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-400 hover:text-white transition duration-300"
                >
                  {item.name}
                  <ArrowUpRight size={16} />
                </a>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-zinc-800 mt-16 md:mt-20">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

          <p className="text-zinc-500 text-sm sm:text-base">
            © 2026 NEX DEV. All rights reserved.
          </p>

          <p className="text-zinc-500 text-sm sm:text-base">
            Designed & Developed with React + Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;