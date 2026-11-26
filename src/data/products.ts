import nozaAiImg from '../assets/images/product_noza_ai_1795693818707.jpg';
import medibotImg from '../assets/images/product_medibot_1795693818892.jpg';
import autocutAiImg from '../assets/images/product_autocut_ai_1795693819061.jpg';
import toolmoraImg from '../assets/images/product_toolmora_1795693819508.jpg';
import ikobuildImg from '../assets/images/product_ikobuild_1795693819570.jpg';
import unimarketImg from '../assets/images/product_unimarket_1795693820667.jpg';

export type ProductCategory =
  | 'Web Applications'
  | 'Mobile Applications'
  | 'Software Tools';

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
  'Software Tools',
  'Web Applications',
  'Mobile Applications',
];

/**
 * Official Cbsoft product portfolio.
 * Only proprietary products developed by Cbsoft are listed here.
 */
export const PRODUCTS: ProductItem[] = [
  {
    slug: 'noza-ai',
    name: 'Noza AI',
    category: 'Software Tools',
    status: 'Live',
    featured: true,
    shortDescription:
      'Smart Stock, Instant Profit & Kinyarwanda Voice POS built for fast, accurate retail and wholesale operations.',
    introduction:
      'Noza AI combines real-time inventory management, automated profit calculation, and Kinyarwanda voice-assisted point-of-sale workflows so shop owners and retail teams can record sales effortlessly and track margins instantly.',
    problemSolved:
      'Small and growing retail businesses often lose visibility into daily profits, stock shrinkage, and fast-moving items because manual ledgers and traditional POS tools are slow and disconnected from local workflows.',
    keyFeatures: [
      'Kinyarwanda voice-powered point-of-sale checkout and stock lookup',
      'Instant daily profit, cost-of-goods, and margin reporting',
      'Automated low-stock alerts and supplier restock tracking',
      'Fast counter workflow designed for desktop, tablet, and mobile POS',
    ],
    technologies: ['TypeScript', 'React', 'Node.js', 'Voice AI', 'PostgreSQL'],
    targetUsers: [
      'Retail shops, wholesalers, and minimarkets',
      'Store managers tracking multi-item inventory and margins',
      'Merchants seeking Kinyarwanda-first voice POS workflows',
    ],
    image: nozaAiImg,
    imageAlt: 'Noza AI retail point-of-sale tablet displaying inventory analytics and voice waveform on a shop counter',
  },
  {
    slug: 'medibot',
    name: 'MediBot',
    category: 'Web Applications',
    status: 'Live',
    featured: true,
    shortDescription:
      'AI-driven pharmacy management, real-time locator, and patient engagement tools — built for scale and reliability.',
    introduction:
      'MediBot unifies pharmacy stock governance, expiry tracking, real-time pharmacy and medication discovery, and structured patient follow-ups inside a dependable healthcare operations platform.',
    problemSolved:
      'Patients frequently struggle to locate stocked medications quickly while pharmacies deal with fragmented inventory records, expired batch risks, and manual patient communication.',
    keyFeatures: [
      'AI-assisted pharmacy inventory, batch, and expiry monitoring',
      'Real-time pharmacy and medication availability locator',
      'Automated patient engagement, refill reminders, and guidance',
      'Role-based access controls built for multi-branch reliability',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AI Workflows'],
    targetUsers: [
      'Community and hospital pharmacies',
      'Patients searching for nearby verified medication availability',
      'Healthcare operations teams managing multi-branch stock',
    ],
    image: medibotImg,
    imageAlt: 'MediBot tablet showing healthcare pharmacy locator map and inventory metrics on a modern pharmacy counter',
  },
  {
    slug: 'autocut-ai',
    name: 'AutoCut AI',
    category: 'Software Tools',
    status: 'Live',
    featured: true,
    shortDescription:
      'Professional automatic video editor & YouTube timeline pipeline for faster, studio-grade content production.',
    introduction:
      'AutoCut AI streamlines post-production by analyzing raw footage, trimming silences, structuring multi-track timelines, and preparing clean exports tailored for YouTube and creator publishing pipelines.',
    problemSolved:
      'Video creators and media teams spend hours manually scrubbing raw recordings, removing dead air, and assembling repeatable timeline cuts before they can focus on storytelling.',
    keyFeatures: [
      'Automated silence removal, pacing detection, and smart scene cuts',
      'Structured multi-track YouTube timeline assembly and export',
      'Audio waveform leveling and clean caption timing alignment',
      'Batch-friendly workflow engineered for recurring creator channels',
    ],
    technologies: ['TypeScript', 'FFmpeg', 'Media Pipelines', 'Node.js', 'React'],
    targetUsers: [
      'YouTube creators and podcast producers',
      'Digital media studios and marketing teams',
      'Educators publishing structured video courses',
    ],
    image: autocutAiImg,
    imageAlt: 'AutoCut AI multi-track video timeline and audio waveform editor on an ultrawide studio monitor',
  },
  {
    slug: 'toolmora',
    name: 'ToolMora',
    category: 'Software Tools',
    status: 'Live',
    featured: true,
    shortDescription:
      'High-speed, client-side online tools for students, creators, and developers. No file limits, 100% private.',
    introduction:
      'ToolMora delivers a fast, browser-native suite of document, image, formatting, and developer utilities that execute locally on your device—eliminating server uploads, file size caps, and privacy compromises.',
    problemSolved:
      'Everyday online utilities often impose arbitrary file limits, slow upload queues, intrusive ads, or upload sensitive files to third-party servers.',
    keyFeatures: [
      '100% client-side execution inside the browser with zero server uploads',
      'No file size limits or daily usage paywalls for core tools',
      'Instant utilities for PDFs, media, code formatting, and conversions',
      'Lightweight, distraction-free interface built for speed',
    ],
    technologies: ['React', 'TypeScript', 'WebAssembly', 'Web Workers', 'Tailwind CSS'],
    targetUsers: [
      'University students handling assignments and documents',
      'Content creators converting and optimizing assets locally',
      'Software developers needing fast privacy-safe utilities',
    ],
    image: toolmoraImg,
    imageAlt: 'ToolMora laptop workspace displaying modular client-side utility tool cards',
  },
  {
    slug: 'ikobuild',
    name: 'IkoBuild',
    category: 'Web Applications',
    status: 'Live',
    featured: true,
    shortDescription:
      'Production-ready SaaS platform that lets you generate full-stack applications from natural language prompts.',
    introduction:
      'IkoBuild turns plain-language product specifications into structured full-stack web applications—complete with clean frontend components, backend API routes, database schemas, and live preview workflows.',
    problemSolved:
      'Moving from an initial software idea to a working, well-structured full-stack codebase normally requires weeks of boilerplate setup, wiring, and deployment configuration.',
    keyFeatures: [
      'Prompt-to-full-stack generation covering UI, APIs, and data models',
      'Live split-screen code inspection and interactive application preview',
      'Modular TypeScript architecture ready for production extension',
      'Built-in project iteration and clean code export workflows',
    ],
    technologies: ['TypeScript', 'React', 'Node.js', 'AI Codegen', 'Cloud SaaS'],
    targetUsers: [
      'Founders and product teams prototyping SaaS products',
      'Software engineers accelerating full-stack delivery',
      'Digital agencies shipping custom client portals faster',
    ],
    image: ikobuildImg,
    imageAlt: 'IkoBuild split-screen full-stack application builder showing structured code and live UI preview',
  },
  {
    slug: 'unimarket',
    name: 'UniMarket',
    category: 'Mobile Applications',
    status: 'Live',
    featured: true,
    shortDescription:
      'Campus e-commerce app for university students to buy needed equipment and educational tools right on campus.',
    introduction:
      'UniMarket connects university students with verified campus sellers and peers so they can discover, compare, and purchase laptops, engineering calculators, textbooks, lab gear, and study tools reliably within their campus community.',
    problemSolved:
      'Students often waste time searching unverified classifieds or distant shops for essential academic equipment, facing high delivery costs and unreliable product quality.',
    keyFeatures: [
      'Campus-specific marketplace organized by academic equipment and tools',
      'Direct peer and campus vendor listings for books, electronics, and lab kits',
      'Fast mobile discovery with clear pricing and campus pickup coordination',
      'Student-focused experience built for everyday affordability and trust',
    ],
    technologies: ['React Native', 'TypeScript', 'Node.js', 'REST APIs', 'PostgreSQL'],
    targetUsers: [
      'University and college students across faculties',
      'Campus bookstores and student-run equipment vendors',
      'Graduating students reselling textbooks and study hardware',
    ],
    image: unimarketImg,
    imageAlt: 'UniMarket campus e-commerce app on a smartphone alongside a laptop, textbook, and scientific calculator',
  },
];

export function getProductBySlug(slug: string | undefined): ProductItem | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}
