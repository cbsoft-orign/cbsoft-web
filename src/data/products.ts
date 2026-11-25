import cloudpulseImg from '../assets/images/product_cloudpulse_1795619442549.jpg';
import civiclinkImg from '../assets/images/product_civiclink_1795619442961.jpg';
import devflowImg from '../assets/images/product_devflow_1795619443478.jpg';
import nexusImg from '../assets/images/blog_scalable_systems_1795619443971.jpg';

export type ProductCategory =
  | 'Web Applications'
  | 'Mobile Applications'
  | 'Software Tools'
  | 'Other Solutions';

export type ProductStatus = 'Live' | 'In Development' | 'Coming Soon';

export interface ProductItem {
  slug: string;
  name: string;
  category: ProductCategory;
  status: ProductStatus;
  featured: boolean;
  shortDescription: string;
  introduction: string;
  problemSolved: string;
  keyFeatures: string[];
  technologies: string[];
  targetUsers: string[];
  image: string;
  imageAlt: string;
  /**
   * Optional real external URL. Leave undefined when the product does not have a live public URL yet.
   */
  externalUrl?: string;
}

export const PRODUCT_CATEGORIES: Array<'All Products' | ProductCategory> = [
  'All Products',
  'Web Applications',
  'Mobile Applications',
  'Software Tools',
  'Other Solutions',
];

/**
 * Editable product portfolio data.
 * Sample entries below reflect active Cbsoft product initiatives and clearly mark non-live items as In Development or Coming Soon.
 */
export const PRODUCTS: ProductItem[] = [
  {
    slug: 'cloudpulse-ops',
    name: 'CloudPulse Ops',
    category: 'Web Applications',
    status: 'In Development',
    featured: true,
    shortDescription:
      'A unified operations web portal for tracking service requests, team workloads, and client deliverables in one workspace.',
    introduction:
      'CloudPulse Ops is Cbsoft’s flagship operations web platform currently in active development. It brings project status tracking, SLA alerts, and client reporting into a single structured web interface.',
    problemSolved:
      'Growing teams often juggle spreadsheets, chat threads, and disconnected ticketing tools, leaving project managers without a clear real-time view of delivery health.',
    keyFeatures: [
      'Role-based workspace views for operations leads and client stakeholders',
      'Structured request intake with automated priority routing',
      'Milestone timeline tracking and deliverable sign-off logs',
      'Exportable summary reports for weekly executive reviews',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    targetUsers: [
      'Software and digital service agencies',
      'Internal IT and operations teams',
      'Multi-branch service organizations',
    ],
    image: cloudpulseImg,
    imageAlt: 'CloudPulse Ops web application dashboard interface displayed on a studio monitor',
  },
  {
    slug: 'civiclink-mobile',
    name: 'CivicLink Mobile',
    category: 'Mobile Applications',
    status: 'In Development',
    featured: true,
    shortDescription:
      'A mobile-first service portal designed to connect communities and local organizations with accessible digital services.',
    introduction:
      'CivicLink Mobile streamlines how community members submit requests, view service updates, and access essential resources directly from their smartphones—even on low-bandwidth connections.',
    problemSolved:
      'Community programs and municipal services frequently rely on walk-in forms or desktop portals that exclude mobile-first users and create administrative backlogs.',
    keyFeatures: [
      'Accessible mobile request forms with offline draft persistence',
      'Real-time status tracking for submitted inquiries and applications',
      'Multilingual-ready UI architecture with high-contrast legibility',
      'Lightweight data footprint optimized for entry-level smartphones',
    ],
    technologies: ['React Native', 'TypeScript', 'REST APIs', 'SQLite'],
    targetUsers: [
      'Community organizations and NGOs',
      'Public service teams and local initiatives',
      'Mobile-first end users seeking direct service access',
    ],
    image: civiclinkImg,
    imageAlt: 'CivicLink Mobile service portal interface on a flagship smartphone',
  },
  {
    slug: 'devflow-studio',
    name: 'DevFlow Studio',
    category: 'Software Tools',
    status: 'Coming Soon',
    featured: true,
    shortDescription:
      'Modular release-readiness and environment verification toolkit for full-stack TypeScript engineering teams.',
    introduction:
      'DevFlow Studio is an upcoming Cbsoft developer tool focused on standardizing pre-deployment checks, environment variable validation, and release checklists across web projects.',
    problemSolved:
      'Teams lose valuable hours debugging staging and production deployments caused by missing environment keys, mismatched schemas, or inconsistent build steps.',
    keyFeatures: [
      'Automated .env contract verification against schema definitions',
      'Pre-flight build, lint, and route health check orchestration',
      'Clear human-readable diagnostic summaries for CI/CD pipelines',
      'Zero-lock-in CLI and configuration format',
    ],
    technologies: ['TypeScript', 'Node.js', 'CLI Tooling', 'Docker'],
    targetUsers: [
      'Full-stack software engineering teams',
      'DevOps and release managers',
      'Consultancies managing multiple client repositories',
    ],
    image: devflowImg,
    imageAlt: 'DevFlow Studio modular deployment architecture isometric visualization',
  },
  {
    slug: 'nexus-data-bridge',
    name: 'Nexus Data Bridge',
    category: 'Other Solutions',
    status: 'Coming Soon',
    featured: false,
    shortDescription:
      'Lightweight integration middleware for synchronizing structured records across legacy tools and modern cloud APIs.',
    introduction:
      'Nexus Data Bridge provides a clean, auditable integration layer for organizations that need to keep CRM, billing, and operational databases synchronized without heavy enterprise middleware.',
    problemSolved:
      'Manual CSV exports and brittle one-off webhook scripts lead to stale records, duplicate entries, and silent synchronization failures.',
    keyFeatures: [
      'Schema-validated field mapping between external REST APIs',
      'Idempotent retry queues with clear failure diagnostics',
      'Audit trail logging for every synchronized record',
      'Configurable webhook adapters for custom internal systems',
    ],
    technologies: ['Node.js', 'TypeScript', 'Webhooks', 'JSON Schema'],
    targetUsers: [
      'Businesses migrating off legacy software systems',
      'Operations analysts automating cross-tool workflows',
      'Engineering teams unifying third-party SaaS data',
    ],
    image: nexusImg,
    imageAlt: 'Nexus Data Bridge layered architectural system visualization',
  },
];

export function getProductBySlug(slug: string | undefined): ProductItem | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}
