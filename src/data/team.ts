import memberOneImg from '../assets/images/team_member_one_1795623451017.jpg';
import memberTwoImg from '../assets/images/team_member_two_1795623451885.jpg';
import memberThreeImg from '../assets/images/team_member_three_1795623452329.jpg';
import memberFourImg from '../assets/images/team_member_four_1795623453901.jpg';

export interface TeamMember {
  id: string;
  fullName: string;
  role: string;
  initials: string;
  bio: string;
  focusAreas: string[];
  photoUrl: string;
  linkedinUrl?: string;
  githubUrl?: string;
  websiteUrl?: string;
}

/**
 * Editable team directory placeholder data.
 * Update member names, roles, biographies, profile images, and social URLs here without touching UI components.
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'lead-architect',
    fullName: 'Clara Bennett',
    role: 'Principal Software Architect',
    initials: 'CB',
    bio: 'Leads full-stack system architecture, TypeScript engineering standards, and resilient cloud infrastructure across Cbsoft client platforms.',
    focusAreas: ['System Architecture', 'TypeScript & Node.js', 'Cloud Reliability'],
    photoUrl: memberOneImg,
    githubUrl: 'https://github.com/cbsoft-orign',
  },
  {
    id: 'product-design-lead',
    fullName: 'Nadia Vance',
    role: 'Head of UI/UX & Product Design',
    initials: 'NV',
    bio: 'Shapes human-centered design systems, interactive prototypes, and WCAG AA accessible interfaces that simplify complex workflows.',
    focusAreas: ['Design Systems', 'User Research', 'Accessible UI'],
    photoUrl: memberTwoImg,
  },
  {
    id: 'mobile-solutions-lead',
    fullName: 'David Mercer',
    role: 'Lead Mobile & Full-Stack Engineer',
    initials: 'DM',
    bio: 'Architects responsive web portals and offline-ready mobile applications engineered for speed, security, and everyday reliability.',
    focusAreas: ['Web & Mobile Apps', 'API Engineering', 'Performance'],
    photoUrl: memberThreeImg,
  },
  {
    id: 'consulting-delivery-lead',
    fullName: 'Elena Brooks',
    role: 'IT Consulting & Delivery Lead',
    initials: 'EB',
    bio: 'Partners closely with client leadership from discovery through launch to align technical roadmaps with measurable business outcomes.',
    focusAreas: ['Technical Strategy', 'Digital Solutions', 'Client Delivery'],
    photoUrl: memberFourImg,
  },
];
