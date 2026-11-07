import type { Localized } from "@/i18n/config";
import { CONTACT_INFO } from "./contact";

export interface PolicyListItem {
  /** Leading bold label, e.g. a service name. Not translated. */
  strong?: string;
  text?: Localized;
  link?: { href: string; label: Localized; external?: boolean };
}

export interface PolicySection {
  heading: Localized;
  paragraphs: Localized[];
  list?: PolicyListItem[];
}

export const privacySections: readonly PolicySection[] = [
  {
    heading: { en: "Introduction", es: "Introducción" },
    paragraphs: [
      {
        en: 'This Privacy Policy describes how Agustín Arenas ("I", "me", or "my") handles your information when you visit my portfolio website at agustinarenas.vercel.app (the "Site").',
        es: "Esta Política de privacidad describe cómo Agustín Arenas maneja su información cuando visita mi sitio web de portafolio en agustinarenas.vercel.app (el «Sitio»).",
      },
    ],
  },
  {
    heading: { en: "Information I Collect", es: "Información que recopilo" },
    paragraphs: [
      {
        en: "This Site is a static portfolio website. I do not collect, store, or process any personal data from visitors. The Site does not:",
        es: "Este Sitio es un portafolio web estático. No recopilo, almaceno ni proceso datos personales de los visitantes. El Sitio no:",
      },
    ],
    list: [
      {
        text: {
          en: "Use cookies or similar tracking technologies",
          es: "Utiliza cookies ni tecnologías de seguimiento similares",
        },
      },
      {
        text: {
          en: "Store any user accounts or login information",
          es: "Almacena cuentas de usuario ni datos de inicio de sesión",
        },
      },
      {
        text: {
          en: "Collect form submissions (contact links open your email client directly)",
          es: "Recopila envíos de formularios (los enlaces de contacto abren directamente su cliente de correo)",
        },
      },
      {
        text: {
          en: "Use analytics that track individual users",
          es: "Utiliza analíticas que rastreen a usuarios individuales",
        },
      },
    ],
  },
  {
    heading: { en: "Third-Party Services", es: "Servicios de terceros" },
    paragraphs: [
      {
        en: "This Site uses the following third-party services:",
        es: "Este Sitio utiliza los siguientes servicios de terceros:",
      },
    ],
    list: [
      {
        strong: "Vercel",
        text: {
          en: "— Hosting provider. Their privacy policy applies to their services.",
          es: "— Proveedor de alojamiento. Su política de privacidad se aplica a sus servicios.",
        },
        link: {
          href: "https://vercel.com/legal/privacy-policy",
          label: { en: "Vercel Privacy Policy", es: "Política de privacidad de Vercel" },
          external: true,
        },
      },
      {
        strong: "Google Fonts",
        text: {
          en: "— Font delivery. Fonts are loaded from Google's servers.",
          es: "— Entrega de fuentes. Las fuentes se cargan desde los servidores de Google.",
        },
        link: {
          href: "https://policies.google.com/privacy",
          label: { en: "Google Privacy Policy", es: "Política de privacidad de Google" },
          external: true,
        },
      },
    ],
  },
  {
    heading: { en: "Links to External Sites", es: "Enlaces a sitios externos" },
    paragraphs: [
      {
        en: "This Site contains links to external sites (GitHub, LinkedIn, project URLs). I am not responsible for the privacy practices of these external sites. I recommend reviewing their privacy policies before providing any personal information.",
        es: "Este Sitio contiene enlaces a sitios externos (GitHub, LinkedIn, URL de proyectos). No soy responsable de las prácticas de privacidad de esos sitios. Recomiendo revisar sus políticas de privacidad antes de proporcionar cualquier dato personal.",
      },
    ],
  },
  {
    heading: { en: "Changes to This Policy", es: "Cambios en esta política" },
    paragraphs: [
      {
        en: 'I may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date.',
        es: "Puedo actualizar esta Política de privacidad ocasionalmente. Cualquier cambio se publicará en esta página con una fecha de «Última actualización» renovada.",
      },
    ],
  },
  {
    heading: { en: "Contact", es: "Contacto" },
    paragraphs: [
      {
        en: "If you have any questions about this Privacy Policy, please contact me at:",
        es: "Si tiene alguna pregunta sobre esta Política de privacidad, puede contactarme en:",
      },
    ],
    list: [
      {
        text: { en: "Email:", es: "Correo electrónico:" },
        link: {
          href: `mailto:${CONTACT_INFO.email}`,
          label: { en: CONTACT_INFO.email, es: CONTACT_INFO.email },
        },
      },
    ],
  },
];
