import SectionTitle from "./SectionTitle";
import { portfolioData } from "../data/portfolioData";

export default function Education() {

  return (
    <section
      id="education"
      className="py-24 bg-blue-50"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <SectionTitle
          small="Academic Journey"
          title="Education"
        />


        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">

          {portfolioData.education.map((item) => (

            <div
              key={item.degree}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition"
            >

              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-xl">
                🎓
              </div>

              <h3 className="mt-6 text-lg font-bold text-slate-900">
                {item.degree}
              </h3>

              <p className="mt-2 text-blue-700 font-medium">
                {item.institution}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                {item.duration}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}