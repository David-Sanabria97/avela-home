export interface Aroma {
  id: string;
  name: string;
  tagline: string;
  description: string;
  perfect_for: string;
  mood: string;
  /** Mezcla de fragancias; se muestra como «Notas: Eucalipto 40% · Pino 30% · …». */
  notas: { nota: string; porcentaje: number }[];
}

export const AROMAS: Aroma[] = [
  // ── Sabana ──────────────────────────────────────────────────────────────────
  {
    id: "neblina",
    name: "Neblina",
    tagline: "Limpia. Fresca. Bogotana.",
    description:
      "El aire de una mañana fría en la sabana: eucalipto de carretera, pino y ropa recién lavada.",
    perfect_for: "Hogar · Descanso · Rutina diaria",
    mood: "Neblina no invade… acompaña.",
    notas: [
      { nota: "Eucalipto", porcentaje: 40 },
      { nota: "Pino", porcentaje: 30 },
      { nota: "Agua de Linos", porcentaje: 30 },
    ],
  },
  {
    id: "paramo",
    name: "Páramo",
    tagline: "Aire frío de montaña.",
    description:
      "Hierbas de montaña, menta fresca y un fondo de madera. Como caminar entre frailejones.",
    perfect_for: "Oficina · Concentración · Mañanas",
    mood: "Páramo despeja la mente.",
    notas: [
      { nota: "Romero", porcentaje: 40 },
      { nota: "Menta Fresca", porcentaje: 30 },
      { nota: "Cedro", porcentaje: 30 },
    ],
  },
  {
    id: "santafe",
    name: "Santafé",
    tagline: "Chocolate para las onces.",
    description:
      "Chocolate caliente con canela y clavo, como el de las onces santafereñas. Dulce, cálido y de casa.",
    perfect_for: "Tardes frías · Sala · Reuniones",
    mood: "Santafé sabe a hogar.",
    notas: [
      { nota: "Chocolate", porcentaje: 50 },
      { nota: "Canela", porcentaje: 30 },
      { nota: "Clavo", porcentaje: 20 },
    ],
  },

  // ── Caribe ──────────────────────────────────────────────────────────────────
  {
    id: "brisa",
    name: "Brisa",
    tagline: "Fresca como diciembre.",
    description:
      "Brisa marina con limón y un toque de coco. Abre las ventanas aunque no estés en la playa.",
    perfect_for: "Baño · Cocina · Espacios abiertos",
    mood: "Brisa trae el mar a casa.",
    notas: [
      { nota: "Brisa Marina", porcentaje: 60 },
      { nota: "Limón", porcentaje: 25 },
      { nota: "Coco Cremoso", porcentaje: 15 },
    ],
  },
  {
    id: "palenque",
    name: "Palenque",
    tagline: "Alegre. Frutal. Caribe.",
    description:
      "Mango, piña y maracuyá recién picados, como la ponchera de frutas de las palenqueras.",
    perfect_for: "Cocina · Fiestas · Días soleados",
    mood: "Palenque es pura alegría.",
    notas: [
      { nota: "Mango", porcentaje: 40 },
      { nota: "Piña", porcentaje: 30 },
      { nota: "Maracuyá", porcentaje: 30 },
    ],
  },
  {
    id: "arena",
    name: "Arena",
    tagline: "Suave y tibia.",
    description:
      "Coco cremoso y vainilla sobre un fondo de sándalo. La playa a las 5 de la tarde.",
    perfect_for: "Habitación · Descanso · Baño de tina",
    mood: "Arena calma sin esfuerzo.",
    notas: [
      { nota: "Coco Cremoso", porcentaje: 50 },
      { nota: "Vainilla", porcentaje: 30 },
      { nota: "Sándalo", porcentaje: 20 },
    ],
  },

  // ── Amazonía ────────────────────────────────────────────────────────────────
  {
    id: "selva",
    name: "Selva",
    tagline: "Verde. Húmeda. Viva.",
    description:
      "Bambú, eucalipto y limoncillo: hojas mojadas después del aguacero.",
    perfect_for: "Oficina · Estudio · Energía limpia",
    mood: "Selva te devuelve el aire.",
    notas: [
      { nota: "Bambú", porcentaje: 40 },
      { nota: "Eucalipto", porcentaje: 30 },
      { nota: "Limoncillo", porcentaje: 30 },
    ],
  },
  {
    id: "ceiba",
    name: "Ceiba",
    tagline: "Madera profunda.",
    description:
      "Roble, cedro e incienso, como la sombra de un árbol de cien años.",
    perfect_for: "Noches · Meditación · Sala",
    mood: "Ceiba es raíz.",
    notas: [
      { nota: "Roble", porcentaje: 40 },
      { nota: "Cedro", porcentaje: 40 },
      { nota: "Incienso", porcentaje: 20 },
    ],
  },
  {
    id: "acai",
    name: "Açaí",
    tagline: "Fruta de la selva.",
    description:
      "La fruta morada del Amazonas, dulce y fresca, con un toque verde.",
    perfect_for: "Habitación · Regalo · Días alegres",
    mood: "Açaí es dulzura con origen.",
    notas: [
      { nota: "Açaí", porcentaje: 60 },
      { nota: "Frutos Verdes", porcentaje: 25 },
      { nota: "Bambú", porcentaje: 15 },
    ],
  },

  // ── Paisa ───────────────────────────────────────────────────────────────────
  {
    id: "cafetal",
    name: "Cafetal",
    tagline: "Tinto recién hecho.",
    description:
      "Café recién molido con panela y canela, como en la finca a las 6 de la mañana.",
    perfect_for: "Cocina · Oficina · Mañanas",
    mood: "Cafetal despierta la casa.",
    notas: [
      { nota: "Café", porcentaje: 60 },
      { nota: "Caramelo", porcentaje: 25 },
      { nota: "Canela", porcentaje: 15 },
    ],
  },
  {
    id: "silleta",
    name: "Silleta",
    tagline: "Flores con alegría.",
    description:
      "Rosas, jazmín y flores de algodón, como una silleta en la Feria de las Flores.",
    perfect_for: "Habitación · Regalo · Celebraciones",
    mood: "Silleta florece donde la pongas.",
    notas: [
      { nota: "Rosas", porcentaje: 40 },
      { nota: "Jazmín", porcentaje: 30 },
      { nota: "Flores de Algodón", porcentaje: 30 },
    ],
  },
  {
    id: "arriero",
    name: "Arriero",
    tagline: "Cuero y camino.",
    description:
      "Cuero de carriel, café y manzana con canela, como una fonda de pueblo.",
    perfect_for: "Estudio · Noches · Sala",
    mood: "Arriero no se rinde.",
    notas: [
      { nota: "Cuero", porcentaje: 50 },
      { nota: "Café", porcentaje: 25 },
      { nota: "Manzana Canela", porcentaje: 25 },
    ],
  },

  // ── Pacífico ────────────────────────────────────────────────────────────────
  {
    id: "manglar",
    name: "Manglar",
    tagline: "Entre el río y el mar.",
    description:
      "Agua salada, bambú y hierbabuena: raíces verdes donde el río se encuentra con el mar.",
    perfect_for: "Baño · Descanso · Espacios abiertos",
    mood: "Manglar refresca y calma.",
    notas: [
      { nota: "Brisa Marina", porcentaje: 40 },
      { nota: "Bambú", porcentaje: 30 },
      { nota: "Hierbabuena", porcentaje: 30 },
    ],
  },
  {
    id: "marimba",
    name: "Marimba",
    tagline: "Cálida como un currulao.",
    description:
      "Coco, mandarina y clavo: un aroma con ritmo, alegre y especiado.",
    perfect_for: "Fiestas · Sala · Reuniones",
    mood: "Marimba se siente en el cuerpo.",
    notas: [
      { nota: "Coco", porcentaje: 40 },
      { nota: "Mandarina", porcentaje: 30 },
      { nota: "Clavo", porcentaje: 30 },
    ],
  },
  {
    id: "azotea",
    name: "Azotea",
    tagline: "Hierbas de la casa.",
    description:
      "Hierbabuena, limoncillo y romero, las hierbas que se siembran en las azoteas del Pacífico.",
    perfect_for: "Cocina · Baño · Mañanas",
    mood: "Azotea huele a casa de la abuela.",
    notas: [
      { nota: "Hierbabuena", porcentaje: 40 },
      { nota: "Limoncillo", porcentaje: 30 },
      { nota: "Romero", porcentaje: 30 },
    ],
  },

  // ── Llanos ──────────────────────────────────────────────────────────────────
  {
    id: "llanero",
    name: "Llanero",
    tagline: "Intenso. Libre. Nuestro.",
    description:
      "Tabaco, cuero y roble, como la silla de montar y el fogón después del trabajo en el llano.",
    perfect_for: "Noches · Estudio · Ambientes sofisticados",
    mood: "Llanero no es para todos.",
    notas: [
      { nota: "Picadura de tabaco", porcentaje: 40 },
      { nota: "Cuero", porcentaje: 30 },
      { nota: "Roble", porcentaje: 30 },
    ],
  },
  {
    id: "mastranto",
    name: "Mastranto",
    tagline: "El llano al pisarlo.",
    description:
      "Hierbas frescas y eucalipto que recuerdan al mastranto, la planta que perfuma la sabana llanera.",
    perfect_for: "Oficina · Mañanas · Energía limpia",
    mood: "Mastranto es aire libre.",
    notas: [
      { nota: "Hierbabuena", porcentaje: 40 },
      { nota: "Romero", porcentaje: 30 },
      { nota: "Eucalipto", porcentaje: 30 },
    ],
  },
  {
    id: "atardecer",
    name: "Atardecer",
    tagline: "El cielo a las seis.",
    description:
      "Mandarina, naranja y miel: dulce y tibio, del color del cielo cuando cae el sol.",
    perfect_for: "Sala · Tardes · Regalo",
    mood: "Atardecer cierra el día bonito.",
    notas: [
      { nota: "Mandarina", porcentaje: 40 },
      { nota: "Naranja", porcentaje: 30 },
      { nota: "Miel de Abejas", porcentaje: 30 },
    ],
  },
];

export function getAromaById(id: string): Aroma | undefined {
  return AROMAS.find((a) => a.id === id);
}

export function formatNotas(aroma: Aroma): string {
  return aroma.notas.map((n) => `${n.nota} ${n.porcentaje}%`).join(" · ");
}
