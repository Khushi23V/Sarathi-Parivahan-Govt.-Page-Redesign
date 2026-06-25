export default function NoteBox({ children }) {
  return (
    <div className="flex items-start gap-2.5 rounded-lg bg-primary-tint px-4 py-3.5">
      <img src="/icons/info-circle.svg" alt="" className="mt-0.5 h-[18px] w-[18px] shrink-0" />
      <p className="text-sm leading-relaxed text-primary">{children}</p>
    </div>
  );
}