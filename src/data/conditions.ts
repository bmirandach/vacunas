export interface Vaccine {
  name: string;
  value: string;
  vaccine: string;
  description: string;
}

export const vaccines: Vaccine[] = [
  {
    name: "BCG - Tuberculosis",
    value: "tuberculosis",
    vaccine: "",
    description: "description"
  },
  {
    name: "Hepatitis B",
    value: "hepatitisb",
    vaccine: "",
    description: "Es una enfermedad ocasionada por el virus de la hepatitis B que afecta principalmente al hígado.\nA veces puede causar daños graves y en algunos casos, volverse una afección hepática crónica(cirrosis)."
  },
  {
    name: "Neumococo",
    value: "neumococo",
    vaccine: "",
    description: "description"
  },
  {
    name: "Polio",
    value: "polio",
    vaccine: "",
    description: "description"
  },
  {
    name: "Rotavirus",
    value: "rotavirus",
    vaccine: "",
    description: "description"
  },
];