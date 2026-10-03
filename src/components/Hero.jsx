import { portfolioData } from "../data/portfolioData";

export default function Hero() {

  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="pt-28 min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50 to-slate-100"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            <p className="text-blue-700 font-bold tracking-[0.25em] text-sm uppercase mb-5">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900">
              {personal.name}
            </h1>

            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-blue-700">
              {personal.role}
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-8 max-w-xl">
              {personal.description}
            </p>


            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-blue-800 text-white font-semibold hover:bg-blue-900 transition"
              >
                View My Work →
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full border-2 border-blue-800 text-blue-800 font-semibold hover:bg-blue-800 hover:text-white transition"
              >
                Contact Me
              </a>

            </div>


            {/* Social */}
            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center font-bold text-blue-800"
              >
                in
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-blue-800"
              >
                ◎
              </a>

              <a
                href="#contact"
                className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-blue-800"
              >
                ✉
              </a>

            </div>

          </div>


          {/* RIGHT */}
          <div className="relative flex justify-center">

            <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-100" />

            <div className="absolute w-[330px] h-[330px] rounded-full bg-blue-200/40" />

            <img
              src="/profile.jpg"
              alt={personal.name}
              className="relative z-10 w-[390px] md:w-[470px] h-[500px] object-cover object-top rounded-[40px] drop-shadow-2xl"
            />

            <div className="absolute right-0 top-16 text-blue-900 text-2xl font-serif italic rotate-[-8deg]">
              Better
              <br />
              People
              <br />
              Better
              <br />
              Tomorrow
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}