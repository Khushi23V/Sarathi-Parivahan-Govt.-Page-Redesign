import { useState, useEffect, useRef } from 'react';
import EmblemStrip from './EmblemStrip';

const LANGUAGES = ['English', 'हिंदी'];
const FONT_SIZES = ['sm', 'base', 'lg'];

function formatDate(date) {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
}

function formatTime(date) {
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  return `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
}

export default function TopUtilityBar({ fontSizeIndex, onFontSizeChange }) {
  const [now, setNow] = useState(new Date());
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState('English');
  const langRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div style={{ background: '#0E003F' }} className="bg-primary text-xs text-white border-b border-white/10 pt-2">
      <div className="page-container flex min-h-9 flex-wrap items-center justify-between gap-2 py-2 sm:h-9 sm:flex-nowrap sm:py-0">
        <EmblemStrip />

        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-2 whitespace-nowrap text-white/90">
            <CalendarIcon /> {formatDate(now)}
          </span>
          <span className="inline-flex items-center gap-2 whitespace-nowrap text-white/90">
            <ClockIcon /> {formatTime(now)}
          </span>

          <div className="relative" ref={langRef}>
            <button
              type="button"
              className="inline-flex items-center gap-2 whitespace-nowrap bg-transparent p-0 text-xs text-white/90"
              onClick={() => setLangOpen((open) => !open)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
            >
              <GlobeIcon /> {language}
              <ChevronIcon />
            </button>
            {langOpen && (
              <ul
                className="absolute top-[calc(100%+6px)] right-0 z-50 min-w-[120px] rounded bg-white py-1 shadow-card-md"
                role="listbox"
              >
                {LANGUAGES.map((lang) => (
                  <li key={lang}>
                    <button
                      type="button"
                      className="block w-full bg-transparent px-3 py-2 text-left text-sm text-primary hover:bg-primary-tint"
                      onClick={() => {
                        setLanguage(lang);
                        setLangOpen(false);
                      }}
                      role="option"
                      aria-selected={language === lang}
                    >
                      {lang}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex items-center gap-1" role="group" aria-label="Adjust font size">
            <button
              type="button"
              className="bg-transparent p-1 text-xs leading-none text-white/90 disabled:cursor-default disabled:opacity-40 enabled:hover:text-white"
              onClick={() => onFontSizeChange(Math.max(0, fontSizeIndex - 1))}
              disabled={fontSizeIndex === 0}
              aria-label="Decrease font size"
            >
              A<sup>-</sup>
            </button>
            <button
              type="button"
              className="bg-transparent p-1 text-sm leading-none text-white/90 enabled:hover:text-white"
              onClick={() => onFontSizeChange(1)}
              aria-label="Reset font size"
            >
              A
            </button>
            <button
              type="button"
              className="bg-transparent p-1 text-base leading-none text-white/90 disabled:cursor-default disabled:opacity-40 enabled:hover:text-white"
              onClick={() => onFontSizeChange(Math.min(FONT_SIZES.length - 1, fontSizeIndex + 1))}
              disabled={fontSizeIndex === FONT_SIZES.length - 1}
              aria-label="Increase font size"
            >
              A<sup>+</sup>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
