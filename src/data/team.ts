export interface TeamMember {
  id: string;
  fullName: string;
  role: string;
  initials: string;
  bio: string;
  photoUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  websiteUrl?: string;
}

/**
 * Editable team directory placeholder data.
 * Update member names, biographies, profile images, and social URLs in this file without touching UI components.
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'lead-architect',
    fullName: 'Engineering Lead (Placeholder)',
    role: 'Principal Software Architect',
    initials: 'EL',
    bio: 'Leads full-stack system architecture, TypeScript engineering standards, and scalable cloud infrastructure across Cbsoft client deliveries.',
    githubUrl: 'https://github.com/cbsoft-orign',
  },
  {
    id: 'product-design-lead',
    fullName: 'Design Lead (Placeholder)',
    role: 'Head of UI/UX & Product Design',
    initials: 'DL',
    bio: 'Oversees user research, responsive design systems, and WCAG AA accessibility across web and mobile interfaces.',
  },
  {
    id: 'mobile-solutions-lead',
    fullName: 'Mobile Lead (Placeholder)',
    role: 'Mobile & Digital Solutions Engineer',
    initials: 'ML',
    bio: 'Architects resilient cross-platform mobile applications and seamless API integrations for growing organizations.',
  },
  {
    id: 'consulting-delivery-lead',
    fullName: 'Delivery Lead (Placeholder)',
    role: 'IT Consulting & Technical Delivery',
    initials: 'TD',
    bio: 'Partners with client leadership from discovery through launch to align technical roadmaps with measurable outcomes.',
  },
];
