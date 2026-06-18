const TICKER_TEXT = 'TRANSPORT DEPARTMENT, GOVERNMENT OF NCT OF DELHI';
const REPEAT_COUNT = 6;

export default function TickerBar() {
  return (
    <div className="relative flex h-10 items-center overflow-hidden whitespace-nowrap bg-primary-tint" aria-hidden="true">
      <div className="animate-ticker inline-flex shrink-0 items-center">
        {Array.from({ length: REPEAT_COUNT }).map((_, i) => (
          <TickerItem key={`a-${i}`} />
        ))}
      </div>
      <div className="animate-ticker inline-flex shrink-0 items-center">
        {Array.from({ length: REPEAT_COUNT }).map((_, i) => (
          <TickerItem key={`b-${i}`} />
        ))}
      </div>
    </div>
  );
}

function TickerItem() {
  return (
    <span className="px-12 text-sm font-medium text-primary">
      {TICKER_TEXT}
    </span>
  );
}
