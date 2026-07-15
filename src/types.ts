export type RoleType = 'Permanent' | 'Executive' | 'IT' | 'Non-IT';

export interface JobRequirementSubmission {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  roleType: string;
  requirementsSummary: string;
  submittedAt: string;
  status: 'Pending' | 'Reviewing' | 'Contacted' | 'Sourcing';
}

export interface JobOpening {
  id: string;
  title: string;
  department: 'IT' | 'Non-IT';
  category: RoleType;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  salaryRange: string;
  postedDate: string;
}

export interface JobApplicationSubmission {
  id: string;
  jobId: string;
  jobTitle: string;
  candidateName: string;
  candidateEmail: string;
  candidatePhone: string;
  candidateLinkedIn?: string;
  resumeSummary?: string;
  appliedAt: string;
  status: 'Received' | 'Screening' | 'Interviewing' | 'Decision Pending';
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  feedback: string;
  avatar: string;
}



