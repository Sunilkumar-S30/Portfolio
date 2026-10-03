import SectionTitle from "./SectionTitle";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {

  return (
    <section
      id="experience"
      className="py-24 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <SectionTitle
          small="Career"
          title="Experience"
        />


        <div className="max-w-4xl mx-auto">

          {portfolioData.experience.map((item) => (

            <div
              key={item.role}
              className="relative pl-10 pb-12 border-l-2 border-blue-100 last:border-transparent"
            >

              {/* Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-700 rounded-full border-4 border-white" />


              <div className="bg-slate-50 rounded-2xl p-7 hover:shadow-lg transition">

                <div className="flex flex-col md:flex-row md:justify-between gap-2">

                  <div>

                    <h3 className="text-xl font-bold text-slate-900">
                      {item.role}
                    </h3>

                    <p className="text-blue-700 font-medium mt-1">
                      {item.company}
                    </p>

                  </div>

                  <span className="text-sm text-slate-500">
                    {item.duration}
                  </span>

                </div>


                <ul className="mt-5 space-y-2">

                  {item.points.map((point) => (

                    <li
                      key={point}
                      className="text-slate-600 flex gap-2"
                    >
                      <span className="text-blue-700">
                        •
                      </span>

                      {point}

                    </li>

                  ))}

                </ul>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}