import futureSoftwareImg from '../assets/images/blog_future_software_1795619443782.jpg';
import scalableSystemsImg from '../assets/images/blog_scalable_systems_1795619443971.jpg';
import workspaceImg from '../assets/images/about_workspace_1795619441269.jpg';
import devflowImg from '../assets/images/product_devflow_1795619443478.jpg';

export type BlogCategory =
  | 'Technology'
  | 'Software Development'
  | 'Innovation'
  | 'Digital Transformation'
  | 'Company Updates';

export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  author: string;
  authorRole: string;
  publishedAt: string;
  readingTime: string;
  coverImage: string;
  coverAlt: string;
  featured: boolean;
  sections: BlogSection[];
}

export const BLOG_CATEGORIES: Array<'All' | BlogCategory> = [
  'All',
  'Technology',
  'Software Development',
  'Innovation',
  'Digital Transformation',
  'Company Updates',
];

/**
 * Locally stored blog articles. Add new articles here to publish automatically across /blog and /blog/[slug].
 */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'engineering-resilient-web-platforms',
    title: 'Engineering Resilient Web Platforms for Modern Businesses',
    excerpt:
      'Why clean architecture, strict TypeScript boundaries, and accessibility-first layouts determine whether a web platform scales gracefully.',
    category: 'Software Development',
    author: 'Cbsoft Engineering Editorial',
    authorRole: 'Software Architecture Team',
    publishedAt: 'November 12, 2026',
    readingTime: '5 min read',
    coverImage: futureSoftwareImg,
    coverAlt: 'Modern glass and concrete technology studio building at dusk',
    featured: true,
    sections: [
      {
        heading: 'Designing for Longevity Beyond Launch Day',
        paragraphs: [
          'Too many digital products are built solely to satisfy an initial launch demo. Six months later, adding a new service workflow or integrating an analytics partner becomes slow and risky because business logic is tangled directly into UI templates.',
          'At Cbsoft, we separate data contracts, validation rules, page layouts, and reusable interface components from day one. This clarity allows teams to iterate quickly without introducing regressions.',
        ],
      },
      {
        heading: 'Performance and Accessibility as Core Engineering Metrics',
        paragraphs: [
          'Fast page loads and keyboard accessibility are not optional polish—they directly shape conversion, search visibility, and user trust. Semantic HTML headings, responsive image sizing, and clear focus states ensure every visitor can navigate effortlessly.',
          'By combining lean client bundles with strict TypeScript checking before every release, organizations gain both speed and long-term maintainability.',
        ],
      },
    ],
  },
  {
    slug: 'scalable-architecture-for-growing-teams',
    title: 'Designing Scalable Digital Systems Without Over-Engineering',
    excerpt:
      'A practical guide to choosing modular monoliths, clean APIs, and incremental cloud infrastructure that match your stage of growth.',
    category: 'Technology',
    author: 'Cbsoft Systems Group',
    authorRole: 'Cloud & Backend Engineering',
    publishedAt: 'October 28, 2026',
    readingTime: '6 min read',
    coverImage: scalableSystemsImg,
    coverAlt: 'Layered dark architectural planes representing modular software architecture',
    featured: false,
    sections: [
      {
        heading: 'Avoid Premature Distributed Complexity',
        paragraphs: [
          'Many growing companies feel pressured to adopt complex microservice topologies before their product or team size requires them. Premature distribution multiplies network failure modes, deployment overhead, and debugging time.',
          'Starting with a well-structured modular architecture gives you strict domain boundaries while keeping local development fast and deployments simple.',
        ],
      },
      {
        heading: 'Clear Contracts Enable Safe Future Extraction',
        paragraphs: [
          'When each module communicates through typed interfaces and documented APIs, scaling a specific workload later becomes straightforward. You can extract high-traffic services only when real telemetry justifies it.',
        ],
      },
    ],
  },
  {
    slug: 'human-centered-design-in-enterprise-software',
    title: 'Why Human-Centered UI/UX Matters in Operational Software',
    excerpt:
      'Enterprise tools do not need to feel intimidating. Clear typography, predictable workflows, and thoughtful spacing cut training time dramatically.',
    category: 'Innovation',
    author: 'Cbsoft Product Design',
    authorRole: 'UI/UX Practice',
    publishedAt: 'October 10, 2026',
    readingTime: '4 min read',
    coverImage: workspaceImg,
    coverAlt: 'Software engineer working at dual monitors in a bright modern engineering studio',
    featured: false,
    sections: [
      {
        heading: 'Clarity Reduces Operational Errors',
        paragraphs: [
          'Internal operations teams spend hours each day inside web dashboards and forms. When screens are crowded with competing badges, inconsistent controls, and unclear validation messages, mistakes become inevitable.',
          'Thoughtful visual hierarchy guides attention to the primary task, surfaces validation feedback inline, and respects the user’s cognitive load.',
        ],
      },
      {
        heading: 'Connecting Design Tokens Directly to Production Code',
        paragraphs: [
          'Our design practice builds token systems that map one-to-one with Tailwind CSS variables and React components. That alignment keeps every new feature consistent as the product grows.',
        ],
      },
    ],
  },
  {
    slug: 'pragmatic-digital-transformation-roadmap',
    title: 'Building a Pragmatic Digital Transformation Roadmap',
    excerpt:
      'How organizations can replace manual bottlenecks with connected digital workflows in focused, measurable phases.',
    category: 'Digital Transformation',
    author: 'Cbsoft Advisory Team',
    authorRole: 'Digital Solutions & IT Consulting',
    publishedAt: 'September 22, 2026',
    readingTime: '5 min read',
    coverImage: devflowImg,
    coverAlt: 'Isometric diagram of connected cloud deployment and workflow modules',
    featured: false,
    sections: [
      {
        heading: 'Start Where Manual Friction Costs the Most',
        paragraphs: [
          'Successful digital transformation rarely happens through a single massive overhaul. Instead, high-impact teams identify the specific workflow—such as client onboarding, request triage, or reporting—where manual handoffs cause the greatest delay.',
        ],
      },
      {
        heading: 'Deliver Working Software Early and Measure Adoption',
        paragraphs: [
          'Shipping a focused first release to real users within weeks generates honest feedback that no slide deck can match. From there, each subsequent phase builds on proven operational value.',
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string | undefined): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
