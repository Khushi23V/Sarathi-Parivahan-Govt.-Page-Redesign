export default function ApplicantTypeCard({ icon, title, description }) {
  return (
    <div className="flex h-full flex-col items-start gap-4 rounded-xl border border-border bg-surface p-6 shadow-card">
      <img src={icon} alt="" className="h-10 w-10 shrink-0" />
      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-semibold text-primary">{title}</h3>
        <p className="text-sm leading-relaxed text-neutral">{description}</p>
      </div>
    </div>
  );
}