import { Link } from 'react-router-dom';

export default function ServiceCard({ icon, title, to }) {
  const baseClasses =
    'flex h-full cursor-pointer flex-col items-start gap-4 rounded-xl bg-surface p-5 shadow-card-md transition-[box-shadow,transform] duration-150 hover:-translate-y-0.5 hover:shadow-card-lg';

  const content = (
    <>
      <img src={icon} alt="" className="h-12 w-12 shrink-0" />
      <span className="text-base leading-snug font-medium text-primary">{title}</span>
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
    <div className={baseClasses} tabIndex={0}>
      {content}
    </div>
  );
}
