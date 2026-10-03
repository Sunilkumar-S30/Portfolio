import SectionTitle from "./SectionTitle";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {

  return (
    <section
      id="projects"
      className="py-24 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <SectionTitle
          small="My Work"
          title="HR Projects"
          description="Selected academic and practical projects related to Human Resources."
        />


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

          {portfolioData.projects.map((project, index) => (

            <div
              key={project.title}
              className="group border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition"
            >

              <div className="h-40 bg-gradient-to-br from-blue-800 to-blue-500 flex items-center justify-center">

                <span className="text-6xl">
                  {index === 0
                    ? "📊"
                    : index === 1
                    ? "👥"
                    : "🎯"}
                </span>

              </div>


              <div className="p-7">

                <h3 className="text-xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {project.description}
                </p>


                <div className="flex flex-wrap gap-2 mt-5">

                  {project.tags.map((tag) => (

                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}