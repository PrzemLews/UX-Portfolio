import { Link } from "react-router";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#374151] text-white border-t-8 border-[#FFC133]">
      {/* Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Brand / CTA */}
            <div className="md:col-span-1">
              <h2 className="text-[32px] font-bold text-[#FFC133] mb-3 leading-tight">
                LET'S CREATE SOMETHING AMAZING TOGETHER
              </h2>

            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-bold mb-4 border-b-4 border-[#FFC133] inline-block pb-1">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="mailto:alex@example.com"
                  className="p-2 bg-[#FFC133] hover:bg-[#FF8A5B] border-4 border-white transition-all hover:translate-y-[-4px]"
                  aria-label="Email"
                >
                  <Mail size={20} className="text-[#374151]" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#FFC133] hover:bg-[#FF8A5B] border-4 border-white transition-all hover:translate-y-[-4px]"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-[#374151]" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#FFC133] hover:bg-[#FF8A5B] border-4 border-white transition-all hover:translate-y-[-4px]"
                  aria-label="GitHub"
                >
                  <Github size={20} className="text-[#374151]" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#FFC133] hover:bg-[#FF8A5B] border-4 border-white transition-all hover:translate-y-[-4px]"
                  aria-label="Twitter"
                >
                  <Twitter size={20} className="text-[#374151]" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t-4 border-[#FFC133] mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2026 Przemyslaw Lewandowski. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}