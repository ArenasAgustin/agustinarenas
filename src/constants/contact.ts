export const CONTACT_INFO = {
  email: "arenasagustin7@gmail.com",
  whatsapp: "https://api.whatsapp.com/send/?phone=5493517738914",
  github: "https://github.com/ArenasAgustin",
  linkedin: "https://www.linkedin.com/in/agustin-arenas/",
  cv: "/curriculum/Curriculum_Agustin_Arenas.pdf",
  site: "https://agustinarenas.vercel.app",
} as const;

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: CONTACT_INFO.github,
    ariaLabel: "Visit Agustín's GitHub profile",
  },
  {
    name: "LinkedIn",
    url: CONTACT_INFO.linkedin,
    ariaLabel: "Visit Agustín's LinkedIn profile",
  },
  {
    name: "Email",
    url: `mailto:${CONTACT_INFO.email}`,
    ariaLabel: "Send email to Agustín Arenas",
  },
  {
    name: "CV",
    url: CONTACT_INFO.cv,
    ariaLabel: "Download Agustín's curriculum vitae",
  },
] as const;
