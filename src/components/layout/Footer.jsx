const FOOTER_COLUMNS = [
  {
    title: 'SERVICES',
    links: ['Dashboard', 'Doctor Registration', 'Activate User Account', 'Find Doctor'],
  },
  {
    title: 'HELP',
    links: ['User Manual', 'FAQs', 'Screen Reader', 'Change State'],
  },
  {
    title: 'CONTACT',
    links: ['Contact Us', 'Feedback / Complaints', 'Acts and Rules', 'Parivahan', 'Sitemap'],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-primary">
      <div className="page-container flex flex-wrap justify-between gap-12 py-12 sm:flex-row">
        <div className="flex flex-col gap-6">
          <img src="/logos/nic-logo.png" alt="National Informatics Centre" className="h-14 w-auto" />
          <img
            src="/logos/digital-india-logo.png"
            alt="Digital India — Power To Empower"
            className="h-11 w-auto"
          />
        </div>

        <div className="flex flex-wrap gap-16">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="mb-3 text-xs font-semibold tracking-wide text-white/60">{column.title}</h3>
<ul className="m-0 flex list-none flex-col gap-3 p-0 pt-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="page-container flex flex-wrap justify-between gap-3 py-4">
          <p className="text-xs text-white/60">
            Best viewed in Chrome 140+, Edge 140+, Firefox 140+, Opera 120+. Recommended resolution: 1366×768 or higher.
          </p>
          <p className="text-xs text-white/60">Designed, developed and hosted by S33</p>
        </div>
      </div>
    </footer>
  );
}
