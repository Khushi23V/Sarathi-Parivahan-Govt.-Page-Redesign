export default function SectionHeading({ children }) {
  return (
    <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold text-primary">
      <span className="inline-block h-5 w-1 rounded-sm bg-primary" aria-hidden="true" />
      {children}
    </h2>
  );
}
