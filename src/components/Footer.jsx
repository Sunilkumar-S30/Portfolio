import { portfolioData } from "../data/portfolioData";

export default function Footer() {

  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-7">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div>

            <span className="font-bold">
              {portfolioData.personal.name}
            </span>

            <span className="mx-3 text-slate-500">
              |
            </span>

            <span className="text-slate-400">
              HR Professional
            </span>

          </div>


          <p className="text-sm text-slate-400">
            © 2026 {portfolioData.personal.name}. All rights reserved.
          </p>


          <div className="flex gap-4">

            <a
              href="#"
              className="hover:text-blue-400"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="hover:text-blue-400"
            >
              Instagram
            </a>

            <a
              href="#contact"
              className="hover:text-blue-400"
            >
              Email
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}