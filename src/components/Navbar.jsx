import { portfolioData } from "../data/portfolioData";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3"
          >

            <div className="w-11 h-11 rounded-full border-2 border-blue-900 flex items-center justify-center">

              <span className="text-xl font-bold text-blue-900">
                S
              </span>

            </div>

            <div>

              <h1 className="font-bold text-lg text-slate-900">
                {portfolioData.personal.name}
              </h1>

              <p className="text-xs text-slate-500">
                HR Professional
              </p>

            </div>

          </a>


          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">

            <a
              href="#home"
              className="text-sm font-medium hover:text-blue-700"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm font-medium hover:text-blue-700"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-sm font-medium hover:text-blue-700"
            >
              Skills
            </a>

            <a
              href="#experience"
              className="text-sm font-medium hover:text-blue-700"
            >
              Experience
            </a>

            <a
              href="#education"
              className="text-sm font-medium hover:text-blue-700"
            >
              Education
            </a>

            <a
              href="#projects"
              className="text-sm font-medium hover:text-blue-700"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-sm font-medium hover:text-blue-700"
            >
              Contact
            </a>

          </nav>


          {/* CV */}
          <a
            href="/resume.pdf"
            download
            className="hidden md:inline-flex bg-slate-900 hover:bg-blue-800 text-white px-5 py-3 rounded-full text-sm font-semibold transition"
          >
            Download CV
          </a>

        </div>

      </div>

    </header>
  );
}