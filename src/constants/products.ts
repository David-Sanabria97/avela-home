import { StaticImageData } from "next/image";
import imgCorcho from "@/img/corcho.jpeg";
import imgVidrio from "@/img/vidrio.jpeg";
import imgBambu from "@/img/bambu.jpeg";

export interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: StaticImageData;
  description: string;
  timeDuration: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "vela-corcho",
    name: "Vela Corcho",
    price: 20000,
    image: imgCorcho,
    timeDuration: "+15 horas",
    description:
      "Nuestra vela en empaque de corcho natural combina elegancia rústica con funcionalidad. El corcho actúa como aislante natural, conservando mejor la fragancia y haciendo de cada vela una pieza única e irrepetible.",
  },
  {
    id: 2,
    slug: "vela-vidrio",
    name: "Vela Vidrio",
    price: 23000,
    image: imgVidrio,
    timeDuration: "+17 horas",

    description:
      "La vela en recipiente de vidrio transparente permite apreciar la belleza de la cera mientras se derrite. El vidrio conserva el calor de forma uniforme, potenciando la liberación del aroma y creando una atmósfera cálida y acogedora en cualquier espacio.",
  },
  {
    id: 3,
    slug: "vela-bambu",
    name: "Vela Bambú",
    price: 45000,
    image: imgBambu,
    timeDuration: "+45 horas",
    description:
      "Nuestra vela premium en empaque de bambú sostenible representa lo mejor de Avela. El bambú, material renovable y resistente, aporta una estética natural y sofisticada que la convierte en el regalo perfecto.",
  },
];

export interface Empaque {
  id: string;
  name: string;
  price: number;
  image: StaticImageData;
  timeDuration: string;
}

export const EMPAQUES: Empaque[] = [
  {
    id: "vela-vidrio",
    name: "Vidrio",
    price: 23000,
    image: imgVidrio,
    timeDuration: "+17 horas",
  },
  {
    id: "vela-corcho",
    name: "Corcho",
    price: 20000,
    image: imgCorcho,
    timeDuration: "+15 horas",
  },
  {
    id: "vela-bambu",
    name: "Bambú",
    price: 45000,
    timeDuration: "+45 horas",

    image: imgBambu,
  },
];
