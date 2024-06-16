export interface Stage {
  name: string;
  value: string;
  vaccines: string[];
  description: string[];
  vaccines_ex: string[];
  description_ex: string[];
}

export const stages: Stage[] = [
  {
    name: "Embarazo",
    value: "embarazo",
    vaccines: ["Antigripal", "Triple bacteriana acelular", "Virus sincicial respiratorio"],
    description: ["en cualquier trimestre de gestación", "a partir de la semana 20 de gestación", "entre las semanas 32 y 36"],
    vaccines_ex: [],
    description_ex: []
  },
  {
    name: "Recién nacidos",
    value: "rn",
    vaccines: ["Hepatitis B", "BCG"],
    description: ["En las primeras 12 horas de vida", "Antes de egresar de la maternidad"],
    vaccines_ex: [],
    description_ex: []
  },
  {
    name: "Hasta el año de vida",
    value: "primer",
    vaccines: ["Rotavirus", "Quíntuple", "IPV", "Neumococo conjugada", "Meningococo", "Antigripal", "Triple viral", "Hepatitis A"],
    description: ["2, 4 y 6 meses", "2, 4 y 6 meses", "2, 4 y 6 meses", "2, 4 y 12 meses", "3 y 5 meses", "A partir de los 6 meses", "12 meses", "12 meses"],
    vaccines_ex: [],
    description_ex: []
  },
  {
    name: "Hasta los 2 años",
    value: "segundo",
    vaccines: ["Meningococo", "Varicela", "Antigripal", "Quíntuple",],
    description: ["15 meses", "15 meses", "Hasta los 24 meses", "15 - 18 meses"],
    vaccines_ex: ["Fiebre amarilla"],
    description_ex: ["18 meses, Residentes en zonas de riesgo"]
  },
  {
    name: "5 años",
    value: "quinto",
    vaccines: ["Varicela", "IPV inactivada", "Triple viral", "Triple bacteriana celular"],
    description: ["", "", "", ""],
    vaccines_ex: ["Antigripal"],
    description_ex: ["Anual para personas con factores de riesgo"]
  },
  {
    name: "11 años",
    value: "decimoprimer",
    vaccines: ["Meningococo", "Triple bacteriana acelular", "VPH"],
    description: ["", "", ""],
    vaccines_ex: ["Antigripal", "Fiebre amarilla", "Triple viral", "Hepatitis B"],
    description_ex: ["Anual para personas con factores de riesgo", "Residentes en zona de riesgo. Refuerzo", "Iniciar o completar esquema", "Iniciar o completar esquema de 3 dosis"]
  },
  {
    name: "15 años a 64 años",
    value: "jovenes",
    vaccines: ["Doble bacteriana"],
    description: ["Refuerzo cada 10 años"],
    vaccines_ex: ["Antigripal", "Fiebre amarilla", "Fiebre hemorrágica argentina"],
    description_ex: ["Anual para personas con factores de riesgo", "Residentes en zonas de riesgo", "A partir de los 15 años para residentes en zonas de riesgo"]
  },
  {
    name: "65 años y más",
    value: "mayores",
    vaccines: ["Antigripal", "Neumococo", "Doble bacteriana"],
    description: ["Anual", "", "Refuerzo cada 10 años"],
    vaccines_ex: [],
    description_ex: []
  },
];