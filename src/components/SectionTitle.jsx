export default function SectionTitle({
  small,
  title,
  description,
}) {
  return (
    <div className="text-center mb-14">

      <p className="text-blue-700 font-semibold tracking-[0.2em] uppercase text-sm mb-3">
        {small}
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl mx-auto mt-4 text-slate-600 leading-7">
          {description}
        </p>
      )}

    </div>
  );
}