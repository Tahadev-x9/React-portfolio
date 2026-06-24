import React from "react";
import { Mail, Phone, MapPin,} from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-6xl  text-black lg:text-7xl font-bold">
          Let's Work Together
        </h1>

        <p className="text-black text-xl mt-6 max-w-2xl mx-auto">
          Have an idea, project, or opportunity? I'd love to hear from you.
          Let's build something modern and meaningful together.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-16">

        {/* Left Side */}
        <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-10">

          <h2 className="text-3xl font-bold mb-8">
            Contact Information
          </h2>

          <div className="space-y-8">

            <div className="flex items-center gap-5">
              <div className="p-4 rounded-2xl bg-zinc-800">
                <Mail size={24} />
              </div>

              <div>
                <p className="text-zinc-400">Email</p>
                <h3 className="text-xl">NexLearn@gmail.com</h3>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="p-4 rounded-2xl bg-zinc-800">
                <Phone size={24} />
              </div>

              <div>
                <p className="text-zinc-400">Phone</p>
                <h3 className="text-xl">+92 300 2156567</h3>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="p-4 rounded-2xl bg-zinc-800">
                <MapPin size={24} />
              </div>

              <div>
                <p className="text-zinc-400">Location</p>
                <h3 className="text-xl">Pakistan</h3>
              </div>
            </div>

          </div>

          {/* Social Icons */}
          <div className="mt-12">

            <h3 className="text-2xl font-semibold mb-6">
              Follow Me
            </h3>

            <div className="flex gap-5">

              <a
                href="#"
                className="p-4 rounded-full bg-zinc-800 hover:bg-white hover:text-black transition duration-300"
              >
             <FaGithub size={24} />
              </a>

              <a
                href="#"
                className="p-4 rounded-full bg-zinc-800 hover:bg-white hover:text-black transition duration-300"
              >
           <FaLinkedin size={24} />
              </a>

              <a
                href="#"
                className="p-4 rounded-full bg-zinc-800 hover:bg-white hover:text-black transition duration-300"
              >
            <FaInstagram size={24} />
              </a>

            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-10">

          <h2 className="text-3xl font-bold mb-8">
            Send a Message
          </h2>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-zinc-800 rounded-xl p-5 outline-none border border-zinc-700 focus:border-white transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-zinc-800 rounded-xl p-5 outline-none border border-zinc-700 focus:border-white transition"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-zinc-800 rounded-xl p-5 outline-none border border-zinc-700 focus:border-white transition"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full bg-zinc-800 rounded-xl p-5 outline-none border border-zinc-700 focus:border-white transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-white text-black py-5 rounded-xl font-semibold text-lg hover:bg-gray-300 transition duration-300"
            >
              Send Message →
            </button>

          </form>

        </div>

      </div>
    </div>
  );
};

export default Contact;