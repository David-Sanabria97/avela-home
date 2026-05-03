import type { StaticImageData } from "next/image";
import Noir from "@/img/NOIR.jpeg";
import Cedro from "@/img/CEDRO.png";
import Alba from "@/img/ALBA.png";
import Fresh from "@/img/FRESH.png";
import Pure from "@/img/PURE.png";
import Ritual from "@/img/RITUAL.png";

export interface Collection {
  id: string;
  name: string;
  tagline: string;
  description: string;
  aromas: string[];
  image: StaticImageData;
  mood: string;
  defaultAroma: string;
}

export const COLLECTIONS: Collection[] = [
  {
    id: "nocturna",
    name: "Nocturna",
    tagline: "Cálida, intensa y envolvente.",
    description:
      "Para las noches que quieres recordar. Fragancias profundas y sensuales que transforman cualquier espacio en un refugio íntimo.",
    aromas: ["noir", "cedro", "cuero", "amber"],
    image: Noir,
    mood: "La noche tiene su propio aroma.",
    defaultAroma: "noir",
  },
  {
    id: "aura",
    name: "Aura",
    tagline: "Limpia, ligera y serena.",
    description:
      "Fragancias que purifican el ambiente y crean una sensación de calma instantánea. Perfectas para el día a día.",
    aromas: ["pure", "talco", "air", "bambu"],
    image: Pure,
    mood: "Respira. Todo está bien.",
    defaultAroma: "pure",
  },
  {
    id: "serena",
    name: "Serena",
    tagline: "Bienestar para cuerpo y mente.",
    description:
      "Aromas que invitan a soltar el día, a descansar y a reconectar contigo. Tu ritual de bienestar personal.",
    aromas: ["fresh", "menta", "bergamota"],
    image: Fresh,
    mood: "El bienestar empieza en tu espacio.",
    defaultAroma: "fresh",
  },
  {
    id: "alba",
    name: "Alba",
    tagline: "Energía, luz y nuevos comienzos.",
    description:
      "Fragancias cítricas y frescas para empezar el día con claridad mental y energía positiva.",
    aromas: ["fresh", "bergamota", "air"],
    image: Alba,
    mood: "Cada mañana es una nueva oportunidad.",
    defaultAroma: "bergamota",
  },
  {
    id: "origen",
    name: "Origen",
    tagline: "Conexión con lo esencial.",
    description:
      "Vuelve a lo natural. Aromas amaderados y terrosos que te reconectan con la tierra y lo auténtico.",
    aromas: ["cedro", "bambu", "cuero"],
    image: Cedro,
    mood: "Lo natural nunca pasa de moda.",
    defaultAroma: "cedro",
  },
  {
    id: "ritual",
    name: "Ritual",
    tagline: "Nuestros aromas más icónicos.",
    description:
      "La selección que más enamora. Los favoritos de quienes ya conocen Avela y vuelven siempre.",
    aromas: ["pure", "amber", "bloom", "noir"],
    image: Ritual,
    mood: "Algunos aromas se vuelven parte de ti.",
    defaultAroma: "amber",
  },
];

export function getCollectionById(id: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.id === id);
}
