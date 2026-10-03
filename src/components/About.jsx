import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <SectionTitle
          small="About Me"
          title="Turning People Potential into Organizational Growth"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative flex justify-center">

            <div className="absolute w-72 h-72 rounded-full bg-blue-100" />

            <img
              src="/profile.jpg"
              alt="HR Professional"
              className="relative w-72 h-80 object-cover rounded-2xl shadow-xl"
            />

          </div>


          {/* Content */}
          <div>

            <p className="text-slate-600 text-lg leading-8">
              I am an HR professional with a strong interest in talent
              acquisition, employee engagement and people development.
              I enjoy working with diverse teams, solving problems and
              creating meaningful workplace experiences.
            </p>

            <p className="mt-5 text-slate-600 text-lg leading-8">
              My goal is to help individuals and organizations grow
              together by creating positive employee experiences and
              supporting effective HR practices.
            </p>


            {/* Values */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">

              <Value icon="👥" title="People Focused" />

              <Value icon="💡" title="Problem Solver" />

              <Value icon="❤️" title="Team Player" />

              <Value icon="📈" title="Continuous Learner" />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}


function Value({ icon, title }) {

  return (
    <div className="text-center">

      <div className="w-12 h-12 mx-auto rounded-full bg-blue-50 flex items-center justify-center text-xl">
        {icon}
      </div>

      <p className="mt-3 text-sm font-semibold text-slate-700">
        {title}
      </p>

    </div>
  );
}