export interface TeamMember {
  id: string;
  fullName: string;
  role: string;
  initials: string;
  bio: string;
  email: string;
  githubUrl: string;
  xUrl: string;
  /** Optional portrait image path when official member headshots are provided. */
  photoUrl?: string;
}

/**
 * Official Cbsoft team directory.
 * Update member biographies, contact addresses, social handles, or optional photoUrl values here.
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'nizeyimana-placide',
    fullName: 'NIZEYIMANA Placide',
    role: 'Founder & CEO',
    initials: 'NP',
    bio: 'Leads Cbsoft’s vision, technical direction, and strategic partnerships—guiding the delivery of reliable software and digital solutions.',
    email: 'nizeyimanaplacide2@gmail.com',
    githubUrl: 'https://github.com/cbsoft-orign',
    xUrl: 'https://x.com/nizeyimanaplacide',
  },
  {
    id: 'kabuye-gaby-prince',
    fullName: 'KABUYE Gaby Prince',
    role: 'Full-Stack Developer',
    initials: 'KP',
    bio: 'Builds end-to-end web platforms, backend APIs, and scalable data integrations engineered for reliability and speed.',
    email: 'kabuye.prince@cbsoftlabs.com',
    githubUrl: 'https://github.com/kabuyeprince',
    xUrl: 'https://x.com/kabuyeprince',
  },
  {
    id: 'sangwa-ineza-niella',
    fullName: 'SANGWA INEZA Niella',
    role: 'UI/UX Developer',
    initials: 'SN',
    bio: 'Crafts human-centered interfaces, cohesive design systems, and accessible frontend experiences tailored for clarity.',
    email: 'sangwa.niella@cbsoftlabs.com',
    githubUrl: 'https://github.com/sangwaniella',
    xUrl: 'https://x.com/sangwaniella',
  },
  {
    id: 'uwajye-ishimwe-bernisse',
    fullName: 'UWAJYE ISHIMWE Bernisse',
    role: 'System Analyst',
    initials: 'UB',
    bio: 'Translates business requirements into structured system architectures, technical specifications, and quality assurance plans.',
    email: 'uwajye.bernisse@cbsoftlabs.com',
    githubUrl: 'https://github.com/uwajyebernisse',
    xUrl: 'https://x.com/uwajyebernisse',
  },
];
