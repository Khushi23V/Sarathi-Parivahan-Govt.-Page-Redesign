const CIRCLE_SIZE = 28; 

export default function StagesList({ stages }) {
  return (
    <ol className="m-0 flex list-none flex-col gap-9 p-0">
      {stages.map((stage, index) => {
        const isLast = index === stages.length - 1;

        return (
          <li key={stage.title} className="relative grid grid-cols-[28px_1fr] items-center gap-x-4">
            {!isLast && (
              <span
                className="absolute w-px bg-border"
                style={{
                  top: '50%',
                  left: CIRCLE_SIZE / 2 - 0.5,
                  height: 'calc(50% + 2.25rem)',
                }}
                aria-hidden="true"
              />
            )}
            <span
              className="relative z-10 flex shrink-0 items-center justify-center rounded-full border-2 border-primary bg-surface text-sm font-semibold text-primary"
              style={{ height: CIRCLE_SIZE, width: CIRCLE_SIZE }}
            >
              {index + 1}
            </span>

            <div className="flex flex-col gap-0.5">
              <span className="text-base text-primary">{stage.title}</span>
              {stage.note && <span className="text-sm text-neutral">{stage.note}</span>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}