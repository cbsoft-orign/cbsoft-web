export interface SocialLink {
  platform: 'GitHub' | 'LinkedIn' | 'X' | 'YouTube';
  url: string | null;
  handle: string;
}

export interface CompanyContactField {
  label: string;
  value: string;
  configured: boolean;
  href?: string;
  helper: string;
}

export interface AdvantageItem {
  number: string;
  title: string;
  description: string;
  outcome: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const COMPANY_INFO = {
  name: 'Cbsoft',
  tagline: 'Future is Now',
  brandMessage: 'Smart Solutions. Greater Opportunities.',
  shortDescription:
    'Cbsoft is an innovative technology team focused on building digital solutions that empower people, businesses, and communities.',
  mission:
    'To develop innovative technology solutions that create meaningful opportunities and solve real-world challenges.',
  vision:
    'To become a trusted technology partner known for transforming ideas into impactful digital solutions.',
  values: [
    {
      title: 'Innovation',
      description: 'We apply modern engineering practices and fresh thinking to solve complex problems cleanly.',
    },
    {
      title: 'Integrity',
      description: 'We communicate transparently on timelines, trade-offs, and architecture decisions.',
    },
    {
      title: 'Collaboration',
      description: 'We work directly alongside client stakeholders from discovery through production launch.',
    },
    {
      title: 'Excellence',
      description: 'We hold every interface, API, and deployment pipeline to strict quality and reliability standards.',
    },
    {
      title: 'Customer Success',
      description: 'We measure every delivery by the operational efficiency and opportunities it creates for users.',
    },
  ],
  approach: [
    {
      step: '01',
      title: 'Discover',
      description: 'Clarify business objectives, user workflows, technical constraints, and measurable success criteria.',
    },
    {
      step: '02',
      title: 'Plan',
      description: 'Define system architecture, interface prototypes, milestone scope, and delivery timelines.',
    },
    {
      step: '03',
      title: 'Develop',
      description: 'Build modular, tested software in iterative sprints with continuous code reviews and stakeholder demos.',
    },
    {
      step: '04',
      title: 'Deliver',
      description: 'Deploy to production with monitoring, documentation, team handoff, and ongoing technical support.',
    },
  ],
};

/**
 * Editable contact configuration.
 * Replace placeholder entries below with official Cbsoft contact credentials when ready.
 */
export const CONTACT_DETAILS: CompanyContactField[] = [
  {
    label: 'Official Email',
    value: 'contact@cbsoft-team.example',
    configured: false,
    helper: 'Placeholder email — update in src/data/company.ts before public launch.',
  },
  {
    label: 'Phone Number',
    value: 'Pending configuration',
    configured: false,
    helper: 'Add official company phone line in src/data/company.ts.',
  },
  {
    label: 'Office Location',
    value: 'Remote-First Engineering Team',
    configured: false,
    helper: 'Configure physical office address in src/data/company.ts when applicable.',
  },
];

/**
 * Configure real social URLs here. Links with `url: null` are shown as unconfigured in UI rather than dead "#" links.
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/cbsoft-orign',
    handle: '@cbsoft-orign',
  },
  {
    platform: 'LinkedIn',
    url: null,
    handle: 'Configure in src/data/company.ts',
  },
  {
    platform: 'X',
    url: null,
    handle: 'Configure in src/data/company.ts',
  },
];

export const VALUE_PROPOSITIONS = [
  {
    title: 'Innovative Tech',
    description: 'Modern cloud, web, and software architectures built for tomorrow.',
    icon: 'Cpu' as const,
  },
  {
    title: 'High Performance',
    description: 'Fast. Reliable. Secure.',
    icon: 'Zap' as const,
  },
  {
    title: 'Client Focused',
    description: 'Your success, our priority.',
    icon: 'Users' as const,
  },
  {
    title: 'A Better Tomorrow',
    description: 'Building a smarter future for organizations and communities.',
    icon: 'Compass' as const,
  },
];

export const WHY_CHOOSE_CBSOFT: AdvantageItem[] = [
  {
    number: '01',
    title: 'Innovation and Creativity',
    description:
      'We combine solid software engineering fundamentals with thoughtful product design to solve real operational bottlenecks rather than adding unnecessary complexity.',
    outcome: 'Practical digital products tailored to real users',
  },
  {
    number: '02',
    title: 'Quality and Reliability',
    description:
      'Every platform is structured with clean TypeScript architectures, strict validation, automated build checks, and security-first data handling.',
    outcome: 'Maintainable systems built for long-term stability',
  },
  {
    number: '03',
    title: 'Collaborative Development',
    description:
      'You stay informed at every milestone through transparent sprint reviews, interactive prototypes, and direct communication with our engineering team.',
    outcome: 'Aligned scope from initial blueprint to release',
  },
  {
    number: '04',
    title: 'Long-Term Support',
    description:
      'Launch is the beginning of real-world adoption. We provide structured documentation, observability guidance, and iterative feature evolution.',
    outcome: 'Sustained momentum as your organization grows',
  },
];

export const CONTACT_FAQS: FaqItem[] = [
  {
    question: 'How does Cbsoft kick off a new software or web project?',
    answer:
      'We begin with a focused discovery session to map your goals, target users, required integrations, and timeline. From there, we deliver a clear technical scope and phased milestone plan.',
  },
  {
    question: 'Can Cbsoft work alongside our internal technical or design team?',
    answer:
      'Yes. We regularly collaborate with existing product owners, designers, and backend engineers—integrating into your repositories, issue trackers, and review workflows.',
  },
  {
    question: 'What happens when I submit the contact form right now?',
    answer:
      'Your submission is validated by our Express API. If an external webhook URL is configured via CONTACT_WEBHOOK_URL, it is forwarded immediately; otherwise, it runs in transparent local development mode without faking external email delivery.',
  },
  {
    question: 'Do you support ongoing maintenance after launch?',
    answer:
      'Yes. We offer structured post-launch retainers covering dependency upgrades, security patches, performance tuning, and new product iterations.',
  },
];
