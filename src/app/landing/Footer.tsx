import { GithubIcon, TerminalIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300">
      <div className="container mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <TerminalIcon className="h-6 w-6 text-[#818cf8]" />
          <span className="text-lg font-bold text-white">DevRoom</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Ethan4582/dev-finder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#181e36] text-gray-300 hover:bg-[#818cf8] hover:text-[#0f172a] transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
        </div>
        <div className="text-xs text-gray-400 text-center md:text-right w-full md:w-auto">
          © {new Date().getFullYear()} <span className="text-[#818cf8] font-semibold">DevRoom</span>. All rights reserved.
        </div>
      </div>
    </footer>
     );
}