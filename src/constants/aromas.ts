export interface Aroma {
  id: string;
  name: string;
  tagline: string;
  description: string;
  perfect_for: string;
  mood: string;
  /** Lo que ve el cliente: «Notas: eucalipto · pino · ropa limpia». */
  notas: string[];
}

// Las mezclas (porcentaje de la fragancia total, proveedor Azahar) son
// internas: van solo en el comentario de cada aroma, nunca en la web.
export const AROMAS: Aroma[] = [
  // ── Sabana ──────────────────────────────────────────────────────────────────
  {
    // Mezcla: Eucalipto 40, Pino 30, Agua de Linos 30
    id: "neblina",
    name: "Neblina",
    tagline: "Limpia. Fresca. Bogotana.",
    description:
      "El aire de una mañana fría en la sabana: eucalipto de carretera, pino y ropa recién lavada.",
    perfect_for: "Hogar · Descanso · Rutina diaria",
    mood: "Neblina no invade… acompaña.",
    notas: ["eucalipto", "pino", "ropa limpia"],
  },
  {
    // Mezcla: Romero 40, Menta Fresca 30, Cedro 30
    id: "paramo",
    name: "Páramo",
    tagline: "Aire frío de montaña.",
    description:
      "Hierbas de montaña, menta fresca y un fondo de madera. Como caminar entre frailejones.",
    perfect_for: "Oficina · Concentración · Mañanas",
    mood: "Páramo despeja la mente.",
    notas: ["romero", "menta", "cedro"],
  },
  {
    // Mezcla: Chocolate 50, Canela 30, Clavo 20
    id: "santafe",
    name: "Santafé",
    tagline: "Chocolate para las onces.",
    description:
      "Chocolate caliente con canela y clavo, como el de las onces santafereñas. Dulce, cálido y de casa.",
    perfect_for: "Tardes frías · Sala · Reuniones",
    mood: "Santafé sabe a hogar.",
    notas: ["chocolate", "canela", "clavo"],
  },

  // ── Caribe ──────────────────────────────────────────────────────────────────
  {
    // Mezcla: Brisa Marina 60, Limón 25, Coco Cremoso 15
    id: "brisa",
    name: "Brisa",
    tagline: "Fresca como diciembre.",
    description:
      "Brisa marina con limón y un toque de coco. Abre las ventanas aunque no estés en la playa.",
    perfect_for: "Baño · Cocina · Espacios abiertos",
    mood: "Brisa trae el mar a casa.",
    notas: ["brisa marina", "limón", "coco"],
  },
  {
    // Mezcla: Mango 40, Piña 30, Maracuyá 30
    id: "palenque",
    name: "Palenque",
    tagline: "Alegre. Frutal. Caribe.",
    description:
      "Mango, piña y maracuyá recién picados, como la ponchera de frutas de las palenqueras.",
    perfect_for: "Cocina · Fiestas · Días soleados",
    mood: "Palenque es pura alegría.",
    notas: ["mango", "piña", "maracuyá"],
  },
  {
    // Mezcla: Coco Cremoso 50, Vainilla 30, Sándalo 20
    id: "arena",
    name: "Arena",
    tagline: "Suave y tibia.",
    description:
      "Coco cremoso y vainilla sobre un fondo de sándalo. La playa a las 5 de la tarde.",
    perfect_for: "Habitación · Descanso · Baño de tina",
    mood: "Arena calma sin esfuerzo.",
    notas: ["coco", "vainilla", "sándalo"],
  },

  // ── Amazonía ────────────────────────────────────────────────────────────────
  {
    // Mezcla: Bambú 40, Eucalipto 30, Limoncillo 30
    id: "selva",
    name: "Selva",
    tagline: "Verde. Húmeda. Viva.",
    description:
      "Bambú, eucalipto y limoncillo: hojas mojadas después del aguacero.",
    perfect_for: "Oficina · Estudio · Energía limpia",
    mood: "Selva te devuelve el aire.",
    notas: ["bambú", "eucalipto", "limoncillo"],
  },
  {
    // Mezcla: Roble 40, Cedro 40, Incienso 20
    id: "ceiba",
    name: "Ceiba",
    tagline: "Madera profunda.",
    description:
      "Roble, cedro e incienso, como la sombra de un árbol de cien años.",
    perfect_for: "Noches · Meditación · Sala",
    mood: "Ceiba es raíz.",
    notas: ["roble", "cedro", "incienso"],
  },
  {
    // Mezcla: Açai 60, Frutos Verdes 25, Bambú 15
    id: "acai",
    name: "Açaí",
    tagline: "Fruta de la selva.",
    description:
      "La fruta morada del Amazonas, dulce y fresca, con un toque verde.",
    perfect_for: "Habitación · Regalo · Días alegres",
    mood: "Açaí es dulzura con origen.",
    notas: ["açaí", "frutos verdes", "bambú"],
  },

  // ── Paisa ───────────────────────────────────────────────────────────────────
  {
    // Mezcla: Café 60, Caramelo 25, Canela 15
    id: "cafetal",
    name: "Cafetal",
    tagline: "Tinto recién hecho.",
    description:
      "Café recién molido con panela y canela, como en la finca a las 6 de la mañana.",
    perfect_for: "Cocina · Oficina · Mañanas",
    mood: "Cafetal despierta la casa.",
    notas: ["café", "caramelo", "canela"],
  },
  {
    // Mezcla: Rosas 40, Jazmín 30, Flores de Algodón 30
    id: "silleta",
    name: "Silleta",
    tagline: "Flores con alegría.",
    description:
      "Rosas, jazmín y flores de algodón, como una silleta en la Feria de las Flores.",
    perfect_for: "Habitación · Regalo · Celebraciones",
    mood: "Silleta florece donde la pongas.",
    notas: ["rosas", "jazmín", "flores de algodón"],
  },
  {
    // Mezcla: Cuero 50, Café 25, Manzana Canela 25
    id: "arriero",
    name: "Arriero",
    tagline: "Cuero y camino.",
    description:
      "Cuero de carriel, café y manzana con canela, como una fonda de pueblo.",
    perfect_for: "Estudio · Noches · Sala",
    mood: "Arriero no se rinde.",
    notas: ["cuero", "café", "manzana canela"],
  },

  // ── Pacífico ────────────────────────────────────────────────────────────────
  {
    // Mezcla: Brisa Marina 40, Bambú 30, Hierbabuena 30
    id: "manglar",
    name: "Manglar",
    tagline: "Entre el río y el mar.",
    description:
      "Agua salada, bambú y hierbabuena: raíces verdes donde el río se encuentra con el mar.",
    perfect_for: "Baño · Descanso · Espacios abiertos",
    mood: "Manglar refresca y calma.",
    notas: ["brisa marina", "bambú", "hierbabuena"],
  },
  {
    // Mezcla: Coconut 40, Mandarina 30, Clavo 30
    id: "marimba",
    name: "Marimba",
    tagline: "Cálida como un currulao.",
    description:
      "Coco, mandarina y clavo: un aroma con ritmo, alegre y especiado.",
    perfect_for: "Fiestas · Sala · Reuniones",
    mood: "Marimba se siente en el cuerpo.",
    notas: ["coco", "mandarina", "clavo"],
  },
  {
    // Mezcla: Hierbabuena 40, Limoncillo 30, Romero 30
    id: "azotea",
    name: "Azotea",
    tagline: "Hierbas de la casa.",
    description:
      "Hierbabuena, limoncillo y romero, las hierbas que se siembran en las azoteas del Pacífico.",
    perfect_for: "Cocina · Baño · Mañanas",
    mood: "Azotea huele a casa de la abuela.",
    notas: ["hierbabuena", "limoncillo", "romero"],
  },

  // ── Llanos ──────────────────────────────────────────────────────────────────
  {
    // Mezcla: Picadura de tabaco 40, Cuero 30, Roble 30
    id: "llanero",
    name: "Llanero",
    tagline: "Intenso. Libre. Nuestro.",
    description:
      "Tabaco, cuero y roble, como la silla de montar y el fogón después del trabajo en el llano.",
    perfect_for: "Noches · Estudio · Ambientes sofisticados",
    mood: "Llanero no es para todos.",
    notas: ["tabaco", "cuero", "roble"],
  },
  {
    // Mezcla: Hierbabuena 40, Romero 30, Eucalipto 30
    // (aproximación: Azahar no vende mastranto)
    id: "mastranto",
    name: "Mastranto",
    tagline: "El llano al pisarlo.",
    description:
      "Hierbas frescas y eucalipto que recuerdan al mastranto, la planta que perfuma la sabana llanera.",
    perfect_for: "Oficina · Mañanas · Energía limpia",
    mood: "Mastranto es aire libre.",
    notas: ["hierbabuena", "romero", "eucalipto"],
  },
  {
    // Mezcla: Mandarina 40, Naranja 30, Miel de Abejas 30
    id: "atardecer",
    name: "Atardecer",
    tagline: "El cielo a las seis.",
    description:
      "Mandarina, naranja y miel: dulce y tibio, del color del cielo cuando cae el sol.",
    perfect_for: "Sala · Tardes · Regalo",
    mood: "Atardecer cierra el día bonito.",
    notas: ["mandarina", "naranja", "miel"],
  },
];

export function getAromaById(id: string): Aroma | undefined {
  return AROMAS.find((a) => a.id === id);
}
