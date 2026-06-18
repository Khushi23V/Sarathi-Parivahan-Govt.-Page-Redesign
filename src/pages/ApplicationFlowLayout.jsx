import { Outlet, useParams } from 'react-router-dom';
import { ApplicationFormProvider } from '../context/ApplicationFormContext';

export default function ApplicationFlowLayout() {
  const { flowType } = useParams();

  return (
    <ApplicationFormProvider flowType={flowType}>
      <div className="page-container py-6 pb-12">
        <Outlet />
      </div>
    </ApplicationFormProvider>
  );
}
