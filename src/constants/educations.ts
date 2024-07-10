export interface Education {
  id: string;
  title: string;
  subtitle: string;
  time: string;
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
    title: "Full Stack Web Developer Course",
    subtitle: "Soy Henry",
    time: "July 2021 - November 2021",
  },
  {
    id: educationsIds.facultad_de_ciencias_exactas_fisicas_y_naturales,
    title: "Computer Engineering Career",
    subtitle: "Facultad de Ciencias Exactas, Físicas y Naturales",
    time: "February 2020 - Present",
  },
  {
    id: educationsIds.instituto_de_ensenanza_domingo_f_sarmiento,
    title: "Secondary Technical Senior Master Builder",
    subtitle: "Instituto de Enseñanza Domingo F. Sarmiento",
    time: "March 2015 - December 2019",
  },
];

const educationsActives = [
  educationsIds.soy_henry,
  educationsIds.facultad_de_ciencias_exactas_fisicas_y_naturales,
  educationsIds.instituto_de_ensenanza_domingo_f_sarmiento,
];

export const educations = allEducations.filter((education) =>
  educationsActives.includes(education.id)
);
