import type { StaticImageData } from "next/image";
// TODO: cambiar por las fotos de src/img/colecciones/<id>.jpg cuando lleguen.
import ImgSabana from "@/img/PURE.png";
import ImgCaribe from "@/img/FRESH.png";
import ImgAmazonia from "@/img/CEDRO.png";
import ImgPaisa from "@/img/RITUAL.png";
import ImgPacifico from "@/img/ALBA.png";
import ImgLlanos from "@/img/NOIR.jpeg";

export interface Collection {
  id: string;
  name: string;
  tagline: string;
  description: string;
  aromas: string[];
  image: StaticImageData;
  mood: string;
  defaultAroma: string;
  /** Color principal de la región; solo se usa como acento. */
  color: string;
}

export const COLLECTIONS: Collection[] = [
  {
    id: "sabana",
    name: "Sabana",
    tagline: "Fría, limpia y acogedora.",
    description:
      "Mañanas de neblina en el altiplano, eucaliptos en la carretera y chocolate santafereño con queso. Aromas para las tardes frías de Bogotá y Boyacá.",
    aromas: ["neblina", "paramo", "santafe"],
    image: ImgSabana, // TODO: cambiar por src/img/colecciones/sabana.jpg
    mood: "El frío también se disfruta.",
    defaultAroma: "neblina",
    color: "#5E7A6E",
  },
  {
    id: "caribe",
    name: "Caribe",
    tagline: "Fresca, alegre y tropical.",
    description:
      "Brisa de mar, arena caliente y las frutas de las palenqueras. El Caribe colombiano, de Cartagena a La Guajira, en tu casa.",
    aromas: ["brisa", "palenque", "arena"],
    image: ImgCaribe, // TODO: cambiar por src/img/colecciones/caribe.jpg
    mood: "Siempre es diciembre en la costa.",
    defaultAroma: "brisa",
    color: "#1F8A8A",
  },
  {
    id: "amazonia",
    name: "Amazonía",
    tagline: "Verde, húmeda y profunda.",
    description:
      "Selva después del aguacero, maderas centenarias y frutas que solo se dan allá. Aromas del Amazonas, Putumayo y Caquetá.",
    aromas: ["selva", "ceiba", "acai"],
    image: ImgAmazonia, // TODO: cambiar por src/img/colecciones/amazonia.jpg
    mood: "Respira como la selva.",
    defaultAroma: "selva",
    color: "#2F5D3A",
  },
  {
    id: "paisa",
    name: "Paisa",
    tagline: "Florida, cálida y trabajadora.",
    description:
      "Silleteros, arrieros y café recién tostado. Antioquia y el Eje Cafetero en tres aromas con mucho orgullo.",
    aromas: ["cafetal", "silleta", "arriero"],
    image: ImgPaisa, // TODO: cambiar por src/img/colecciones/paisa.jpg
    mood: "Hecho con berraquera.",
    defaultAroma: "cafetal",
    color: "#9B3B4A",
  },
  {
    id: "pacifico",
    name: "Pacífico",
    tagline: "Salada, verde y musical.",
    description:
      "Lluvia, manglar, marimba y las hierbas de azotea que se siembran en las casas del Chocó, Buenaventura y Tumaco.",
    aromas: ["manglar", "marimba", "azotea"],
    image: ImgPacifico, // TODO: cambiar por src/img/colecciones/pacifico.jpg
    mood: "El Pacífico suena y huele distinto.",
    defaultAroma: "manglar",
    color: "#1D4E6E",
  },
  {
    id: "llanos",
    name: "Llanos",
    tagline: "Intensa, libre y cálida.",
    description:
      "Sabana infinita, atardeceres naranja, mastranto y cuero de silla. El Meta, Casanare y Arauca al caer el sol.",
    aromas: ["llanero", "mastranto", "atardecer"],
    image: ImgLlanos, // TODO: cambiar por src/img/colecciones/llanos.jpg
    mood: "Donde el cielo no se acaba.",
    defaultAroma: "llanero",
    color: "#B5562B",
  },
];

export function getCollectionById(id: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.id === id);
}
