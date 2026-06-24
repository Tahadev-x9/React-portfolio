import React from "react";
import { navLinks, socials } from "./footerData";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-24">

            {/* CTA */}

            <div className="max-w-7xl mx-auto px-8">

                <div className="rounded-[40px] border border-zinc-700 bg-gray-200  text-black px-16 py-20 text-center">

                    <h2 className="text-6xl md:text-7xl font-bold">
                        Let's Build
                        <br />
                        Something Amazing
                    </h2>

                    <p className="text-zinc-400 text-xl mt-6 max-w-3xl mx-auto leading-9">
                        From idea to deployment, I create fast, scalable and
                        beautiful web experiences that leave a lasting impression.
                    </p>

             <a
              href="#contact"
              className="bg-black text-white  px-6 py-2 rounded-full hover:bg-gray-800 transition"
          >
              Let's Talk
            </a>


                </div>

            </div>

            {/* Footer */}

            <div className="max-w-7xl mx-auto px-8 mt-24">

                <div className="grid md:grid-cols-3 gap-16">

                    {/* Logo */}

                    <div>

                        <h1 className="text-5xl font-black">
                            NEX DEV
                        </h1>

                        <p className="text-zinc-500 leading-8 mt-6">
                            Building modern digital experiences with
                            React, Tailwind CSS and creative UI design.
                        </p>

                    </div>

                    {/* Navigation */}

                    <div>

                        <h3 className="text-2xl font-bold mb-8">
                            Navigation
                        </h3>

                        <div className="space-y-5">

                            {navLinks.map((item) => (
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    key={item}
                                    className="block text-zinc-400 hover:text-white duration-300"
                                >
                                    {item}
                                </a>
                            ))}

                        </div>

                    </div>

                    {/* Social */}

                    <div>

                        <h3 className="text-2xl font-bold mb-8">
                            Connect
                        </h3>

                        <div className="space-y-5">

                            {socials.map((item) => (
                                <a
                                    href={item.link}
                                    key={item.name}
                                    target="_blank"
                                    className="flex items-center gap-2 text-zinc-400 hover:text-white duration-300"
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

            <div className="border-t border-zinc-800 mt-20">

                <div className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center flex-wrap">

                    <p className="text-zinc-500">
                        © 2026 NEX DEV. All rights reserved.
                    </p>

                    <p className="text-zinc-500">
                        Designed & Developed with React + Tailwind CSS
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;