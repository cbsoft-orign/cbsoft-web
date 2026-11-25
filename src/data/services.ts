export type ServiceSlug =
  | 'web-development'
  | 'mobile-development'
  | 'software-development'
  | 'ui-ux-design'
  | 'digital-solutions'
  | 'it-consulting';

export type ServiceIconName =
  | 'Globe'
  | 'Smartphone'
  | 'Code2'
  | 'Layers'
  | 'Sparkles'
  | 'Briefcase';

export interface ServiceProcessStep {
  step: string;
  title: string;
  detail: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  icon: ServiceIconName;
  shortDescription: string;
  heroSubtitle: string;
  detailedDescription: string;
  problemsSolved: string[];
  capabilities: string[];
  technologies: string[];
  process: ServiceProcessStep[];
  relatedProductSlugs: string[];
  faqs: ServiceFaq[];
}

export const SERVICES: ServiceItem[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    shortTitle: 'Web Development',
    icon: 'Globe',
    shortDescription:
      'Fast, accessible, and SEO-ready web applications engineered with modern frontend and server architectures.',
    heroSubtitle: 'High-performance web platforms built for scale, clarity, and search visibility.',
    detailedDescription:
      'Cbsoft designs and builds production web applications ranging from corporate platforms and customer portals to complex multi-tenant SaaS interfaces. We focus on semantic markup, clean component architecture, fast load times, and resilient API integration.',
    problemsSolved: [
      'Slow legacy websites with poor mobile responsiveness and high bounce rates',
      'Fragmented frontend codebases that make adding new features costly and error-prone',
      'Low search engine discoverability caused by missing metadata and unstructured content',
      'Disconnected web portals that fail to sync cleanly with internal operations',
    ],
    capabilities: [
      'Responsive React and TypeScript single-page and server-rendered web apps',
      'Custom customer dashboards, partner portals, and content workflows',
      'REST and GraphQL API integration with strict input validation',
      'Technical SEO architecture including sitemaps, schema markup, and OpenGraph',
      'Accessibility audits targeting WCAG AA keyboard and screen-reader usability',
      'Automated production bundling, performance profiling, and CI readiness',
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    process: [
      {
        step: '01',
        title: 'Architecture & Content Mapping',
        detail: 'Define route structure, data models, SEO priorities, and core user journeys.',
      },
      {
        step: '02',
        title: 'Component System Engineering',
        detail: 'Build reusable, accessible UI primitives and responsive layout templates.',
      },
      {
        step: '03',
        title: 'API & State Integration',
        detail: 'Connect backend endpoints, form validation, caching, and error boundaries.',
      },
      {
        step: '04',
        title: 'Performance & Launch QA',
        detail: 'Verify cross-device breakpoints, Lighthouse metrics, and production deployment.',
      },
    ],
    relatedProductSlugs: ['cloudpulse-ops', 'nexus-data-bridge'],
    faqs: [
      {
        question: 'Do you build both marketing websites and complex web applications?',
        answer:
          'Yes. We engineer both high-converting brand websites and interactive data-driven web platforms tailored to operational workflows.',
      },
      {
        question: 'How do you handle SEO for React web applications?',
        answer:
          'We configure route-specific titles, meta descriptions, canonical tags, OpenGraph metadata, XML sitemaps, and Schema.org JSON-LD structured data.',
      },
    ],
  },
  {
    slug: 'mobile-development',
    title: 'Mobile App Development',
    shortTitle: 'Mobile App Development',
    icon: 'Smartphone',
    shortDescription:
      'Intuitive iOS and Android applications crafted for reliable offline performance and everyday usability.',
    heroSubtitle: 'Dependable mobile experiences engineered for citizens, teams, and modern enterprises.',
    detailedDescription:
      'We develop responsive, battery-conscious mobile applications that bring essential services directly to users on iOS and Android. From field operations tools to community service apps, we emphasize smooth navigation, secure authentication, and resilient network handling.',
    problemsSolved: [
      'Desktop-only workflows that slow down field teams and mobile-first audiences',
      'Inconsistent user experiences across Android and iOS screen sizes',
      'Apps that break or lose user input under intermittent mobile connectivity',
      'Complex onboarding flows that cause users to abandon mobile tools',
    ],
    capabilities: [
      'Cross-platform mobile engineering with React Native and native Android/Kotlin support',
      'Offline-first local caching and graceful background synchronization',
      'Push notification architecture and deep-linking workflows',
      'Biometric-ready session handling and secure token storage',
      'Touch-optimized layouts tested across compact and large mobile viewports',
      'App store readiness, build packaging, and release checklist support',
    ],
    technologies: ['React Native', 'TypeScript', 'Kotlin', 'REST APIs', 'SQLite', 'Firebase'],
    process: [
      {
        step: '01',
        title: 'Mobile Journey Scoping',
        detail: 'Map core on-the-go actions, offline requirements, and platform targets.',
      },
      {
        step: '02',
        title: 'Touch-First Prototyping',
        detail: 'Design thumb-friendly navigation, forms, and visual feedback states.',
      },
      {
        step: '03',
        title: 'Native & Cross-Platform Build',
        detail: 'Implement application screens, local storage, and API communication.',
      },
      {
        step: '04',
        title: 'Device Testing & Release',
        detail: 'Validate across Android and iOS form factors and prepare store builds.',
      },
    ],
    relatedProductSlugs: ['civiclink-mobile'],
    faqs: [
      {
        question: 'Should we choose cross-platform or native mobile development?',
        answer:
          'We evaluate your hardware integrations, performance needs, and budget during discovery to recommend React Native or native Kotlin/Swift development.',
      },
      {
        question: 'Can Cbsoft connect a mobile app to our existing web backend?',
        answer:
          'Yes. We design clean API adapters or extend your existing backend endpoints so web and mobile stay synchronized.',
      },
    ],
  },
  {
    slug: 'software-development',
    title: 'Software Development',
    shortTitle: 'Software Development',
    icon: 'Code2',
    shortDescription:
      'Custom backend systems, APIs, and internal enterprise platforms tailored to complex business logic.',
    heroSubtitle: 'Resilient custom software engineered around your exact operational requirements.',
    detailedDescription:
      'Off-the-shelf tools rarely fit every nuance of a growing organization. Cbsoft builds bespoke software systems, microservices, automation engines, and developer tooling designed for maintainability, strong typing, and predictable performance.',
    problemsSolved: [
      'Manual spreadsheet workflows and disconnected legacy desktop tools',
      'Brittle software systems that lack automated tests or clear documentation',
      'Data silos between accounting, operations, customer support, and reporting',
      'Security gaps from ad-hoc scripts and unvalidated data pipelines',
    ],
    capabilities: [
      'Full-stack custom software architecture in TypeScript, Node.js, and Python',
      'Relational database modeling, migrations, and query optimization',
      'Role-based access control (RBAC) and auditable API design',
      'Event-driven background job processing and scheduled automation',
      'Legacy system modernization and modular service extraction',
      'Comprehensive technical documentation and developer onboarding guides',
    ],
    technologies: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Python', 'Docker', 'Redis'],
    process: [
      {
        step: '01',
        title: 'Domain & Workflow Analysis',
        detail: 'Document business rules, edge cases, compliance constraints, and SLAs.',
      },
      {
        step: '02',
        title: 'System & Data Modeling',
        detail: 'Design database schemas, service boundaries, and API contracts.',
      },
      {
        step: '03',
        title: 'Iterative Engineering',
        detail: 'Deliver tested modules in predictable sprints with continuous validation.',
      },
      {
        step: '04',
        title: 'Deployment & Handover',
        detail: 'Ship containerized services with monitoring hooks and operational runbooks.',
      },
    ],
    relatedProductSlugs: ['devflow-studio', 'cloudpulse-ops'],
    faqs: [
      {
        question: 'Who owns the source code Cbsoft develops?',
        answer:
          'Clients retain full ownership of custom-commissioned repositories, documentation, and deployment configurations upon agreed delivery milestones.',
      },
      {
        question: 'Can you modernize an existing codebase without a full rewrite?',
        answer:
          'Yes. We frequently introduce TypeScript typing, automated tests, and modular API boundaries incrementally while keeping live systems running.',
      },
    ],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    shortTitle: 'UI/UX Design',
    icon: 'Layers',
    shortDescription:
      'Human-centered interfaces, design systems, and interactive prototypes built for clarity and adoption.',
    heroSubtitle: 'Purposeful interfaces that simplify complex workflows and strengthen brand trust.',
    detailedDescription:
      'Great software feels effortless to navigate. Our UI/UX design practice bridges user research and production frontend engineering—creating scalable design systems, clear information architecture, and accessible interfaces that users immediately understand.',
    problemsSolved: [
      'Cluttered enterprise screens that overwhelm new users and increase support tickets',
      'Inconsistent visual patterns across different pages and product modules',
      'High drop-off rates during multi-step forms, onboarding, or checkout flows',
      'Designs that look good in static mockups but break in real responsive code',
    ],
    capabilities: [
      'User flow mapping, wireframing, and information architecture',
      'Reusable design token systems covering color, typography, spacing, and states',
      'Interactive Figma prototypes for stakeholder validation before engineering',
      'WCAG AA contrast verification and accessible component specifications',
      'Responsive grid planning across desktop, tablet, and smartphone breakpoints',
      'Design-to-code handoff aligned directly with Tailwind CSS and React',
    ],
    technologies: ['Figma', 'Design Systems', 'Tailwind CSS', 'WCAG AA', 'Interactive Prototyping'],
    process: [
      {
        step: '01',
        title: 'User & Task Research',
        detail: 'Identify friction points, user roles, and primary task priorities.',
      },
      {
        step: '02',
        title: 'Structure & Wireframes',
        detail: 'Establish hierarchy, navigation clarity, and responsive layout skeletons.',
      },
      {
        step: '03',
        title: 'Visual System & Prototype',
        detail: 'Apply brand identity, typography, and interactive component states.',
      },
      {
        step: '04',
        title: 'Engineering Alignment',
        detail: 'Partner directly with frontend engineers to ensure pixel-accurate delivery.',
      },
    ],
    relatedProductSlugs: ['civiclink-mobile', 'cloudpulse-ops'],
    faqs: [
      {
        question: 'Can Cbsoft audit and redesign an existing application interface?',
        answer:
          'Yes. We conduct usability and accessibility reviews, pinpoint workflow bottlenecks, and deliver a phased interface refresh.',
      },
      {
        question: 'Do your designers collaborate directly with developers?',
        answer:
          'Yes. Every UI system we design is structured with real CSS tokens, responsive breakpoints, and component states in mind.',
      },
    ],
  },
  {
    slug: 'digital-solutions',
    title: 'Digital Solutions',
    shortTitle: 'Digital Solutions',
    icon: 'Sparkles',
    shortDescription:
      'End-to-end digital transformation, system integrations, and community-empowering platforms.',
    heroSubtitle: 'Integrated digital ecosystems that connect teams, customers, and data.',
    detailedDescription:
      'Digital transformation succeeds when tools work together seamlessly. Cbsoft designs holistic digital solutions that unify customer portals, internal operations, automated notifications, and reporting pipelines into one coherent platform.',
    problemsSolved: [
      'Disconnected third-party SaaS tools requiring duplicate manual data entry',
      'Paper-based or email-driven processes that delay customer service',
      'Lack of real-time operational visibility across teams and branches',
      'Difficulty scaling community or organizational programs online',
    ],
    capabilities: [
      'Cross-system API integrations and webhook orchestration',
      'Workflow digitization for service requests, approvals, and onboarding',
      'Unified reporting portals and operational dashboards',
      'Cloud storage, document workflows, and automated notification pipelines',
      'Community and educational platform engineering',
      'Phased rollout strategies with minimal operational disruption',
    ],
    technologies: ['Cloud APIs', 'Webhooks', 'Node.js', 'React', 'PostgreSQL', 'OAuth 2.0'],
    process: [
      {
        step: '01',
        title: 'Operational Bottleneck Audit',
        detail: 'Trace how data and requests currently move across your organization.',
      },
      {
        step: '02',
        title: 'Integration Blueprint',
        detail: 'Select the right mix of custom modules and third-party API connectors.',
      },
      {
        step: '03',
        title: 'Platform Implementation',
        detail: 'Build and test end-to-end automated workflows and user portals.',
      },
      {
        step: '04',
        title: 'Rollout & Adoption',
        detail: 'Onboard teams smoothly with clear guides and measurable KPIs.',
      },
    ],
    relatedProductSlugs: ['nexus-data-bridge', 'civiclink-mobile'],
    faqs: [
      {
        question: 'How do you approach integrating with our existing tools?',
        answer:
          'We inspect available APIs, webhooks, and export formats first so we can preserve working investments while eliminating manual handoffs.',
      },
      {
        question: 'Are digital solutions suitable for small and mid-sized organizations?',
        answer:
          'Yes. We scope modular, high-impact phases so smaller teams capture value quickly without enterprise bloat.',
      },
    ],
  },
  {
    slug: 'it-consulting',
    title: 'IT Consulting',
    shortTitle: 'IT Consulting',
    icon: 'Briefcase',
    shortDescription:
      'Pragmatic technology strategy, architecture reviews, and technical leadership for confident decisions.',
    heroSubtitle: 'Clear technical direction before you commit budget, headcount, or infrastructure.',
    detailedDescription:
      'Making the right architectural and vendor decisions early saves months of rework. Cbsoft provides grounded IT consulting covering system architecture, stack selection, security posture reviews, cloud cost optimization, and delivery roadmaps.',
    problemsSolved: [
      'Uncertainty around choosing the right framework, database, or cloud provider',
      'Escalating infrastructure costs or recurring production bottlenecks',
      'Technical debt slowing down engineering velocity and release confidence',
      'Need for an independent architectural review before a major build',
    ],
    capabilities: [
      'Software architecture reviews and scalability assessments',
      'Technology stack evaluation and build-vs-buy analysis',
      'Security baseline audits and OWASP-aligned hardening plans',
      'Cloud deployment topology and CI/CD workflow design',
      'Technical scoping, milestone estimation, and vendor readiness',
      'Engineering team mentorship and code quality standards setup',
    ],
    technologies: ['Cloud Architecture', 'Security Audits', 'CI/CD', 'System Design', 'TypeScript'],
    process: [
      {
        step: '01',
        title: 'Technical Discovery',
        detail: 'Review existing architecture, repositories, goals, and operational pain points.',
      },
      {
        step: '02',
        title: 'Risk & Opportunity Matrix',
        detail: 'Identify architectural bottlenecks, security gaps, and quick wins.',
      },
      {
        step: '03',
        title: 'Actionable Roadmap',
        detail: 'Deliver concrete recommendations ranked by impact, effort, and cost.',
      },
      {
        step: '04',
        title: 'Advisory Support',
        detail: 'Assist your leadership and engineering team during implementation.',
      },
    ],
    relatedProductSlugs: ['devflow-studio', 'nexus-data-bridge'],
    faqs: [
      {
        question: 'Can we engage Cbsoft solely for an architecture audit before building?',
        answer:
          'Yes. Many clients start with a focused consulting engagement to validate technical feasibility and establish a clear blueprint.',
      },
      {
        question: 'What deliverables are included in an IT consulting engagement?',
        answer:
          'You receive written architecture diagrams, risk assessments, stack recommendations, and a prioritized execution roadmap.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string | undefined): ServiceItem | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
