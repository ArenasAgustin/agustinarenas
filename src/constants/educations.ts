// TODO: render education section
import type { Localized } from "@/i18n/config";

export interface Education {
  id: string;
  title: Localized;
  subtitle: string;
  time: Localized;
}

const educationsIds = {
  soy_henry: "soy_henry",
  facultad_de_ciencias_exactas_fisicas_y_naturales:
    "facultad_de_ciencias_exactas_fisicas_y_naturales",
  instituto_de_ensenanza_domingo_f_sarmiento:
    "instituto_de_ensenanza_domingo_f_sarmiento",
};

const allEducations: Education[] = [
  {
    id: educationsIds.soy_henry,
    title: { en: "Full Stack Web Developer Course", es: "Curso de Desarrollador Web Full Stack" },
    subtitle: "Soy Henry",
    time: { en: "July 2021 - November 2021", es: "Julio 2021 - Noviembre 2021" },
  },
  {
    id: educationsIds.facultad_de_ciencias_exactas_fisicas_y_naturales,
    title: { en: "Computer Engineering Career", es: "Carrera de Ingeniería en Computación" },
    subtitle: "Facultad de Ciencias Exactas, Físicas y Naturales",
    time: { en: "February 2020 - Present", es: "Febrero 2020 - Actualidad" },
  },
  {
    id: educationsIds.instituto_de_ensenanza_domingo_f_sarmiento,
    title: { en: "Secondary Technical Senior Master Builder", es: "Secundario técnico: Maestro Mayor de Obras" },
    subtitle: "Instituto de Enseñanza Domingo F. Sarmiento",
    time: { en: "March 2015 - December 2019", es: "Marzo 2015 - Diciembre 2019" },
  },
];

export const educations: readonly Education[] = allEducations;
