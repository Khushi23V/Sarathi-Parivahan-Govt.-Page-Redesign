export default function LogoBar() {
  return (
    <div className="py-5" style={{ background: 'linear-gradient(to right, #0E003F 75%, #1a0a6b 100%)' }}>
  <div className="page-container flex items-center justify-between">
    <div className="flex items-center gap-4">
      <img
        src="/logos/sarathi-parivahan.png"
        alt="Sarathi Parivahan Logo"
        className="h-16 w-auto shrink-0"
      />
    </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-md border border-white/40 bg-white/[0.08] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.16]"
          >
            Change State
          </button>
          <button
            type="button"
            className="rounded-md bg-white px-5 py-3 text-sm font-medium text-primary transition-opacity hover:opacity-90"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
