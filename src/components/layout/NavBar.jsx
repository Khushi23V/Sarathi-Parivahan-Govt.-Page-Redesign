import { useState, useRef, useEffect } from 'react';

const NAV_ITEMS = [
  { label: "Learner's Licence", hasDropdown: true },
  { label: 'Driving Licence', hasDropdown: true },
  { label: 'Conductor Licence', hasDropdown: true },
  { label: 'Driving School Licence', hasDropdown: true },
  { label: 'Appointments', hasDropdown: true },
  { label: 'Upload Document', hasDropdown: true },
  { label: 'Fee Payments', hasDropdown: true },
  { label: 'More', hasDropdown: true },
];

export default function NavBar() {
  const [openIndex, setOpenIndex] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenIndex(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="border-b border-border bg-surface" ref={navRef}>
      <div className="page-container flex h-[52px] items-center gap-6 overflow-x-auto sm:overflow-x-visible">
        {NAV_ITEMS.map((item, index) => (
          <div className="relative" key={item.label}>
            <button
              type="button"
              className="inline-flex h-[52px] items-center gap-1 whitespace-nowrap bg-transparent py-2 text-sm font-medium text-primary hover:text-primary/80"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-haspopup={item.hasDropdown ? 'true' : undefined}
              aria-expanded={item.hasDropdown ? openIndex === index : undefined}
            >
              {item.label}
              {item.hasDropdown && <ChevronDown />}
            </button>
            {/* Dropdown menus intentionally left static/empty for now — to be built per nav item */}
            {item.hasDropdown && openIndex === index && (
              <div className="absolute top-full left-0 z-50 min-w-[200px] rounded border border-border bg-surface p-3 shadow-card-md">
                <p className="m-0 text-sm text-neutral">Menu coming soon</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
