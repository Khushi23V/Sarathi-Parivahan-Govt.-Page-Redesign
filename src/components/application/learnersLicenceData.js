export const APPLICANT_TYPES = [
  {
    icon: '/icons/shield-check.svg',
    title: 'Applicant With Aadhar',
    description:
      'Applicants using Aadhar number can take the test from their home or any preferred location and obtain an e-Learner\u2019s Licence instantly.',
  },
  {
    icon: '/icons/id-card.svg',
    title: 'Applicant Without Aadhar',
    description:
      'Applicants without Aadhar can apply online. They will need to take the test physically at MLO, Mall Road Office.',
  },
];

export const APPLICATION_STAGES = [
  { title: 'Fill application details' },
  { title: 'Upload documents' },
  {
    title: 'Upload photo and signature',
    note: 'For eKYC via Aadhaar, only signature upload is required',
  },
  { title: 'E-sign document' },
  { title: 'Fee payment' },
  { title: 'Verify the payment status' },
  {
    title: 'Book LL slot',
    note: 'Only applicable for non-eKYC applications without Aadhaar',
  },
  { title: 'Take the LL test' },
];