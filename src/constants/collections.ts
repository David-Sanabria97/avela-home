export interface Collection {
  id: string
  name: string
  tagline: string
  description: string
  aromas: string[]
  image: string
  mood: string
}

export const COLLECTIONS: Collection[] = [
  {
    id: 'nocturna',
    name: 'Nocturna',
    tagline: 'Cálida, intensa y envolvente.',
    description:
      'Para las noches que quieres recordar. Fragancias profundas y sensuales que transforman cualquier espacio en un refugio íntimo.',
    aromas: ['Noir', 'Cedro', 'Cuero', 'Amber'],
    image: 'https://images.unsplash.com/photo-1608181831688-8c9f9f85e01e?w=600&q=80',
    mood: 'La noche tiene su propio aroma.',
  },
  {
    id: 'aura',
    name: 'Aura',
    tagline: 'Limpia, ligera y serena.',
    description:
      'Fragancias que purifican el ambiente y crean una sensación de calma instantánea. Perfectas para el día a día.',
    aromas: ['Pure', 'Talco', 'Air', 'Bambú'],
    image: 'https://images.unsplash.com/photo-1602928309543-c9eb7b148f69?w=600&q=80',
    mood: 'Respira. Todo está bien.',
  },
  {
    id: 'serena',
    name: 'Serena',
    tagline: 'Bienestar para cuerpo y mente.',
    description:
      'Aromas que invitan a soltar el día, a descansar y a reconectar contigo. Tu ritual de bienestar personal.',
    aromas: ['Fresh', 'Menta', 'Bergamota'],
    image: 'https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?w=600&q=80',
    mood: 'El bienestar empieza en tu espacio.',
  },
  {
    id: 'alba',
    name: 'Alba',
    tagline: 'Energía, luz y nuevos comienzos.',
    description:
      'Fragancias cítricas y frescas para empezar el día con claridad mental y energía positiva.',
    aromas: ['Fresh', 'Bergamota', 'Air'],
    image: 'https://images.unsplash.com/photo-1519587577062-b67fe6c7f8c0?w=600&q=80',
    mood: 'Cada mañana es una nueva oportunidad.',
  },
  {
    id: 'origen',
    name: 'Origen',
    tagline: 'Conexión con lo esencial.',
    description:
      'Vuelve a lo natural. Aromas amaderados y terrosos que te reconectan con la tierra y lo auténtico.',
    aromas: ['Cedro', 'Bambú', 'Cuero'],
    image: 'https://images.unsplash.com/photo-1607006483224-56a1c5b5a4dd?w=600&q=80',
    mood: 'Lo natural nunca pasa de moda.',
  },
  {
    id: 'ritual',
    name: 'Ritual',
    tagline: 'Nuestros aromas más icónicos.',
    description:
      'La selección que más enamora. Los favoritos de quienes ya conocen Avela y vuelven siempre.',
    aromas: ['Pure', 'Amber', 'Bloom', 'Noir'],
    image: 'https://images.unsplash.com/photo-1602928309543-c9eb7b148f69?w=600&q=80',
    mood: 'Algunos aromas se vuelven parte de ti.',
  },
]
