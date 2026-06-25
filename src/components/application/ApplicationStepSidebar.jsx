const STEPS = [
  'Application Submission Instructions',
  'Basic Details',
  'Authentication of e-KYC',
  'Application Form',
];

const DOT_SIZE = 20; 
export default function ApplicationStepSidebar({ activeIndex = 0 }) {
  return (
    <nav aria-label="Application progress">
      <ol className="m-0 flex list-none flex-col gap-6 p-0">
        {STEPS.map((label, index) => {
          const isActive = index === activeIndex;
          const isLast = index === STEPS.length - 1;

          return (
            <li key={label} className="relative flex items-center gap-3">
              {!isLast && (
                <span
                  className="absolute bg-border"
                  style={{
                    top: `calc(50% + ${DOT_SIZE / 2}px)`,
                    left: DOT_SIZE / 2 - 0.5,
                    bottom: '-1.5rem',
                    width: 1,
                  }}
                  aria-hidden="true"
                />
              )}

              <span
                className="relative z-10 flex shrink-0 items-center justify-center"
                style={{ height: DOT_SIZE, width: DOT_SIZE }}
              >
                {isActive ? (
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                ) : (
                  <span className="h-2 w-2 rounded-full border-2 border-border bg-surface" />
                )}
              </span>

              {isActive ? (
                <span
                  className="rounded-lg px-3 py-2 text-[13px] leading-tight font-medium whitespace-nowrap text-primary"
                  style={{
                    backgroundColor: 'rgba(41, 121, 212, 0.1)',
                    border: '1px solid rgba(14, 0, 63, 0.43)',
                  }}
                >
                  {label}
                </span>
              ) : (
                <span className="px-3 py-2 text-[13px] leading-tight font-medium whitespace-nowrap text-neutral">
                  {label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}