import { portfolioData } from "../data/portfolioData";

export default function Contact() {

  const { personal } = portfolioData;

  return (
    <section
      id="contact"
      className="py-24 bg-slate-50"
    >

      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-14">

          <div className="grid md:grid-cols-2 gap-12">

            {/* Contact Information */}
            <div>

              <p className="text-blue-700 font-semibold tracking-widest uppercase text-sm">
                Contact
              </p>

              <h2 className="mt-3 text-4xl font-bold text-slate-900">
                Let's Connect
              </h2>

              <p className="mt-5 text-slate-600 leading-7">
                I'm always open to new opportunities, collaborations and
                meaningful conversations.
              </p>


              <div className="mt-8 space-y-5">

                <ContactItem
                  icon="✉"
                  label="Email"
                  value={personal.email}
                />

                <ContactItem
                  icon="☎"
                  label="Phone"
                  value={personal.phone}
                />

                <ContactItem
                  icon="📍"
                  label="Location"
                  value={personal.location}
                />

              </div>

            </div>


            {/* Form */}
            <form className="bg-white rounded-2xl p-7 shadow-sm">

              <div className="space-y-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="input"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="input"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="input"
                />

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="input resize-none"
                />

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-slate-900 text-white font-semibold hover:bg-blue-800 transition"
                >
                  Send Message →
                </button>

              </div>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}


function ContactItem({ icon, label, value }) {

  return (
    <div className="flex items-center gap-4">

      <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
        {icon}
      </div>

      <div>

        <p className="text-xs text-slate-500">
          {label}
        </p>

        <p className="font-semibold">
          {value}
        </p>

      </div>

    </div>
  );
}