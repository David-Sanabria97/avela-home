export interface Aroma {
  id: string
  name: string
  tagline: string
  description: string
  perfect_for: string
  mood: string
}

export const AROMAS: Aroma[] = [
  {
    id: 'pure',
    name: 'Pure',
    tagline: 'Limpio. Suave. Impecable.',
    description:
      'Una mezcla delicada que envuelve tu espacio en un aroma elegante y silencioso. Como sábanas recién cambiadas en un hotel de lujo.',
    perfect_for: 'Hogar · Descanso · Rutina diaria',
    mood: 'Pure no invade… acompaña.',
  },
  {
    id: 'talco',
    name: 'Talco',
    tagline: 'Limpio. Suave. Atemporal.',
    description:
      'Un aroma delicado que envuelve tu espacio en sensación de piel recién cuidada. Sutil, elegante y perfecto para quienes aman lo simple bien hecho.',
    perfect_for: 'Descanso · Rutina diaria · Espacios minimalistas',
    mood: 'Talco no destaca… perfecciona.',
  },
  {
    id: 'air',
    name: 'Air',
    tagline: 'Respira diferente.',
    description:
      'La frescura del bambú y la bergamota crea un ambiente ligero, limpio y sofisticado. Ideal para transformar cualquier espacio en un lugar que se siente premium sin esfuerzo.',
    perfect_for: 'Espacios modernos · Energía limpia',
    mood: 'AIR es frescura con clase.',
  },
  {
    id: 'bambu',
    name: 'Bambú',
    tagline: 'Ligera. Fresca. Natural.',
    description:
      'El equilibrio perfecto entre frescura y elegancia. Bambú transforma cualquier espacio en un ambiente limpio, moderno y sofisticado.',
    perfect_for: 'Hogar · Oficina · Energía limpia',
    mood: 'Bambú es frescura con intención.',
  },
  {
    id: 'noir',
    name: 'Noir',
    tagline: 'Intensa. Elegante. Inolvidable.',
    description:
      'Una combinación profunda de cedro, cuero y un toque de bergamota que recuerda a perfumes de alta gama. Una fragancia que no pasa desapercibida.',
    perfect_for: 'Noches · Ambientes sofisticados',
    mood: 'NOIR no es para todos… es para quien sabe elegir.',
  },
  {
    id: 'cedro',
    name: 'Cedro',
    tagline: 'Profundo. Sereno. Elegante.',
    description:
      'Un aroma amaderado que transmite calma, estabilidad y sofisticación. Perfecto para ambientes que buscan carácter sin exceso.',
    perfect_for: 'Noches · Espacios elegantes',
    mood: 'Cedro es presencia silenciosa.',
  },
  {
    id: 'cuero',
    name: 'Cuero',
    tagline: 'Intenso. Diferente. Inolvidable.',
    description:
      'Una fragancia con carácter que evoca lujo, elegancia y personalidad fuerte. No es para todos… y ahí está su magia.',
    perfect_for: 'Ambientes exclusivos',
    mood: 'Cuero no acompaña… domina.',
  },
  {
    id: 'fresh',
    name: 'Fresh',
    tagline: 'Energía que se siente.',
    description:
      'Una combinación vibrante de menta y bergamota que refresca el ambiente y despeja la mente. Limpia el espacio y renueva tu energía de forma inmediata.',
    perfect_for: 'Trabajo · Enfoque · Días activos',
    mood: 'FRESH despierta tu espacio.',
  },
  {
    id: 'bergamota',
    name: 'Bergamota',
    tagline: 'Frescura que despierta.',
    description:
      'Un aroma cítrico elegante que ilumina el ambiente y renueva la energía al instante. Sutil pero presente, limpia sin saturar.',
    perfect_for: 'Enfoque · Días activos · Espacios cerrados',
    mood: 'Bergamota es claridad en aroma.',
  },
  {
    id: 'menta',
    name: 'Menta',
    tagline: 'Aire nuevo en cada respiro.',
    description:
      'Una fragancia fresca y revitalizante que transforma el ambiente en segundos. Ideal para despejar la mente y recargar energía.',
    perfect_for: 'Trabajo · Estudio · Concentración',
    mood: 'Menta activa tu espacio.',
  },
  {
    id: 'bloom',
    name: 'Bloom',
    tagline: 'Dulce, pero con intención.',
    description:
      'Una mezcla equilibrada de tutti frutti, frutos rojos y un toque suave de canela que crea un aroma alegre sin perder elegancia. Dulzura con personalidad.',
    perfect_for: 'Ambientes cálidos · Detalles especiales',
    mood: 'BLOOM es dulzura con estilo.',
  },
  {
    id: 'tutti-frutti',
    name: 'Tutti Frutti',
    tagline: 'Alegre. Dulce. Vibrante.',
    description:
      'Un aroma divertido que llena el espacio de energía y calidez. Perfecto para quienes buscan un toque diferente y juvenil.',
    perfect_for: 'Espacios creativos · Regalos',
    mood: 'Tutti Frutti es energía en aroma.',
  },
  {
    id: 'amber',
    name: 'Amber',
    tagline: 'El ambiente cambia cuando el calor se siente.',
    description:
      'Una mezcla envolvente de frutos rojos y canela que transforma cualquier espacio en un lugar cálido, íntimo y lleno de emoción. Dulce en su punto exacto, sin ser pesada.',
    perfect_for: 'Noches especiales · Citas · Momentos que quieres recordar',
    mood: 'AMBER no solo huele… se siente.',
  },
  {
    id: 'frutos-rojos',
    name: 'Frutos Rojos',
    tagline: 'Dulce con carácter.',
    description:
      'Una fragancia envolvente que llena el espacio de calidez y emoción sin ser empalagosa. Perfecta para crear momentos especiales.',
    perfect_for: 'Hogar · Detalles · Citas',
    mood: 'Frutos rojos despierta sensaciones.',
  },
  {
    id: 'canela',
    name: 'Canela',
    tagline: 'Cálida. Intensa. Reconfortante.',
    description:
      'Un aroma que envuelve el ambiente en una sensación acogedora y profunda. Ideal para quienes aman los espacios con personalidad.',
    perfect_for: 'Noches · Clima frío · Momentos íntimos',
    mood: 'Canela transforma el ambiente.',
  },
]

export function getAromaById(id: string): Aroma | undefined {
  return AROMAS.find((a) => a.id === id)
}
