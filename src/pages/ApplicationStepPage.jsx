import { useParams } from 'react-router-dom';
import { useApplicationForm } from '../context/ApplicationFormContext';

export default function ApplicationStepPage() {
  const { step } = useParams();
  const { flowType, formData } = useApplicationForm();

  return (
    <div>
      <p className="mb-4 text-sm text-neutral">
        Flow: {flowType} — Step: {step}
      </p>
      <h1 className="mb-4 text-2xl font-semibold">Step placeholder</h1>
      <p className="text-neutral">
        This step will be built once the corresponding screen is shared. Saved form data so far:
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg border border-border bg-surface p-4 text-sm">
        {JSON.stringify(formData, null, 2)}
      </pre>
    </div>
  );
}
