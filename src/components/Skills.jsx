import SectionTitle from "./SectionTitle";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {

  return (
    <section
      id="skills"
      className="py-24 bg-slate-50"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <SectionTitle
          small="My Skills"
          title="Professional Skills"
          description="Key HR and professional capabilities developed through academic and practical experience."
        />


        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm">

          <div className="space-y-8">

            {portfolioData.skills.map((skill) => (

              <div key={skill.name}>

                <div className="flex justify-between mb-3">

                  <span className="font-semibold text-slate-700">
                    {skill.name}
                  </span>

                  <span className="text-blue-700 font-semibold">
                    {skill.value}%
                  </span>

                </div>


                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">

                  <div
                    className="h-full bg-blue-700 rounded-full"
                    style={{
                      width: `${skill.value}%`,
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}