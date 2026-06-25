import { useNavigate } from 'react-router-dom';
import ApplicationStepSidebar from '../../components/application/ApplicationStepSidebar';
import ApplicantTypeCard from '../../components/application/ApplicantTypeCard';
import StagesList from '../../components/application/StagesList';
import NoteBox from '../../components/application/NoteBox';
import { APPLICANT_TYPES, APPLICATION_STAGES } from '../../components/application/learnersLicenceData';

export default function LearnersLicenceInstructionsPage() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 gap-30 lg:grid-cols-[280px_1fr]">
      <aside>
        <ApplicationStepSidebar activeIndex={0} />
      </aside>

      <div>
        <h1 className="mb-8 text-2xl font-semibold text-primary">
          Learner&rsquo;s Licence Application Instructions
        </h1>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {APPLICANT_TYPES.map((type) => (
            <ApplicantTypeCard
              key={type.title}
              icon={type.icon}
              title={type.title}
              description={type.description}
            />
          ))}
        </div>

        <hr className="my-8 border-border" />

        <h2 className="mb-8 text-lg font-semibold text-primary">
          Stages of Learner&rsquo;s Licence Application
        </h2>
        <StagesList stages={APPLICATION_STAGES} />

        <div className="mt-8">
          <NoteBox>
            Please go through the road safety tutorial that will be provided before proceeding for the test
          </NoteBox>
        </div>

        <hr className="my-8 border-border" />

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-md border border-border bg-surface px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-bg"
            onClick={() => navigate('/')}
          >
            Cancel
          </button>
          <button
            type="button"
            className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            onClick={() => navigate('/apply/learners-licence/step-2')}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}