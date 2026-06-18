import { Link } from 'react-router-dom';

export default function QuickActionCard({ icon, iconBg, title, description, to }) {
  const baseClasses =
    'flex w-full items-center gap-4 rounded-xl bg-surface p-5 text-left shadow-card-md transition-[box-shadow,transform] duration-150 hover:-translate-y-0.5 hover:shadow-card-lg';

  const content = (
    <>
      <span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg [&>img]:h-6 [&>img]:w-6"
        style={{ background: iconBg }}
      >
        <img src={icon} alt="" />
      </span>
      <span className="flex flex-1 flex-col gap-0.5">
        <span className="text-base font-semibold text-primary">{title}</span>
        <span className="text-sm text-neutral">{description}</span>
      </span>
      <span className="shrink-0 text-primary" aria-hidden="true">
        <ArrowIcon />
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={baseClasses}>
      {content}
    </button>
  );
}

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
