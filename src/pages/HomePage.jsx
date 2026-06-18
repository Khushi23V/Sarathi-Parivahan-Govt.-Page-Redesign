import SectionHeading from '../components/home/SectionHeading';
import QuickActionCard from '../components/home/QuickActionCard';
import ServiceCard from '../components/home/ServiceCard';
import { QUICK_ACTIONS, HOMEPAGE_SECTIONS } from '../components/home/homepageData';

export default function HomePage() {
  return (
    <div className="page-container py-6 pb-12">
      <section className="mb-14">
        <SectionHeading>Quick Actions</SectionHeading>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {QUICK_ACTIONS.map((action) => (
            <QuickActionCard
              key={action.title}
              icon={action.icon}
              iconBg={action.iconBg}
              title={action.title}
              description={action.description}
              to={action.to}
            />
          ))}
        </div>
      </section>

      {HOMEPAGE_SECTIONS.map((section) => (
        <section className="mb-14" key={section.title}>
          <SectionHeading>{section.title}</SectionHeading>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {section.cards.map((card) => (
              <ServiceCard
                key={card.title}
                icon={card.icon}
                iconBg={card.iconBg}
                title={card.title}
                to={card.to}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
