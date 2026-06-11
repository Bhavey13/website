import { JobOpening, Testimonial } from './types';

export const jobOpeningData: JobOpening[] = [
  {
    id: 'it-01',
    title: 'Lead Full-Stack Software Engineer',
    department: 'IT',
    category: 'IT',
    location: 'Bengaluru, India (Hybrid)',
    type: 'Full-time / Permanent',
    description: 'We are seeking an experienced Full-Stack Engineer to lead the development of enterprise SaaS platforms. You will direct a team of frontend and backend engineers, maintaining code quality and robust architectures.',
    requirements: [
      '8+ years of hands-on experience in React, TypeScript, Node.js, and PostgreSQL.',
      'Strong architecture skills, including microservices and serverless infrastructure.',
      'Proven leadership skills with a passion for mentoring junior and mid-level engineers.',
      'Excellent system design capabilities and API integration experience.'
    ],
    salaryRange: '₹24,00,000 - ₹35,00,000 per annum',
    postedDate: '2 days ago'
  },
  {
    id: 'exec-01',
    title: 'Chief Information Officer (CIO)',
    department: 'IT',
    category: 'Executive',
    location: 'Bengaluru, India (On-site)',
    type: 'Full-time / Executive',
    description: 'A leading multi-national conglomerate is hiring a visionary Chief Information Officer. This executive role is responsible for driving the technology roadmap, modernizing core platforms, and steering group-level cybersecurity.',
    requirements: [
      '15+ years of technology leadership experience in large corporate setups.',
      'Proven expertise in digital transformation, infrastructure migration, and cloud strategy.',
      'Experience managing substantial technology budgets and multi-functional international vendors.',
      'Exceptional communication and board-level presentation skills.'
    ],
    salaryRange: 'Competitive Executive Package',
    postedDate: '4 days ago'
  },
  {
    id: 'nonit-01',
    title: 'Director of Talent Acquisition',
    department: 'Non-IT',
    category: 'Permanent',
    location: 'Bengaluru, India (On-site)',
    type: 'Full-time / Permanent',
    description: 'A hyper-growth fintech firm seeks an HR/TA Leader to scale their pan-India workforce. You will control corporate sourcing strategies, employer branding, and build an internal recruitment engine for diverse functions.',
    requirements: [
      '10+ years of HR experience with minimum 6 years specializing in scale up environments.',
      'Deep command of employer branding campaigns, assessment methods, and modern ATS tools.',
      'Exceptional negotiation skills and command of talent market analytics.',
      'Strong collaboration history with executive stakeholders.'
    ],
    salaryRange: '₹18,00,000 - ₹26,00,000 per annum',
    postedDate: '1 day ago'
  },
  {
    id: 'it-02',
    title: 'Senior Data Engineer (AI/ML Enablement)',
    department: 'IT',
    category: 'IT',
    location: 'Bengaluru, India (Remote-friendly)',
    type: 'Full-time / Permanent',
    description: 'An AI-driven analytics tech agency is looking for a Senior Data Engineer. You will design and implement highly-available streaming and batch data pipelines that feed predictive modules and LLM stacks.',
    requirements: [
      '5+ years of experience with Python, Scala, Spark, or Flink.',
      'Command over cloud data storage suites (BigQuery, Redshift, Snowflake).',
      'Knowledge of data orchestration (Airflow, Prefect) and data modeling conventions.',
      'Familiarity with containerized execution (Docker, Kubernetes) is a strong plus.'
    ],
    salaryRange: '₹20,00,000 - ₹30,00,000 per annum',
    postedDate: 'Just now'
  },
  {
    id: 'nonit-02',
    title: 'Senior Financial Analyst',
    department: 'Non-IT',
    category: 'Non-IT',
    location: 'Bengaluru, India (Hybrid)',
    type: 'Full-time / Permanent',
    description: 'An established global consulting firm seeks a Senior Financial Analyst to lead cash-flow forecasting, risk modeling, and strategic budget formulations directly under the Chief Financial Officer.',
    requirements: [
      '5+ years of corporate finance, investment banking, or specialized accounting experience.',
      'Proficiency with advanced financial modeling, SQL-based reporting, or Power BI/Tableau.',
      'CA, MBA in Finance from a prestigious institution, or CFA charterholders preferred.',
      'Exceptional logical problem-solving and presentation skills.'
    ],
    salaryRange: '₹14,00,000 - ₹20,00,000 per annum',
    postedDate: '5 days ago'
  },
  {
    id: 'exec-02',
    title: 'Vice President of Sales & Operations',
    department: 'Non-IT',
    category: 'Executive',
    location: 'Bengaluru, India (On-site)',
    type: 'Full-time / Executive',
    description: 'We are sourcing on behalf of a major industrial engineering manufacturer for a Head of Country Sales and Supply Chain Operations. This position oversees national sales pipelines, key account management, and factory-to-market channels.',
    requirements: [
      '12+ years heading B2B or industrial sales segments with robust operation budgets.',
      'Strong network of manufacturing distributors and institutional procurement offices.',
      'In-depth knowledge of logistics management, export protocols, and vendor negotiations.',
      'Dynamic leader with a track record of expanding market share in multiple regions.'
    ],
    salaryRange: 'Executive Salary + Performance Bonuses',
    postedDate: '3 days ago'
  }
];

export const clientSuccessStories: Testimonial[] = [
  {
    id: 't1',
    name: 'Rohan Deshmukh',
    designation: 'VP of Technology',
    company: 'ScribeFlow Innovations',
    feedback: 'Nvaraa Solutions did an outstanding job filling our technical architecture roles. They delivered candidates that matched our tech stack and culture, cutting our time-to-hire by almost 40%.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 't2',
    name: 'Anjali Nair',
    designation: 'Head of Human Resources',
    company: 'Zenith Retail International',
    feedback: 'For executive search, Nvaraa is our absolute gold standard. Their consultants understand leadership depth. Highly consultative and professional from qualification to final negotiation.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 't3',
    name: 'Samuel George',
    designation: 'Co-Founder & CTO',
    company: 'HyperScale AI',
    feedback: 'Fitted perfectly with our agile hiring. Their deep domain experts in AI recruitment sourced three brilliant data engineers within 10 days. Exceptional talent partner!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
  }
];
