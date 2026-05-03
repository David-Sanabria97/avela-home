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
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "vela-corcho",
    name: "Vela Corcho",
    price: 20000,
    image: imgCorcho,
    description:
      "Nuestra vela en empaque de corcho natural combina elegancia rústica con funcionalidad. Elaborada con 70% cera de soya y 30% parafina premium, garantizando una quema limpia, pareja y duradera. El corcho actúa como aislante natural, conservando mejor la fragancia y haciendo de cada vela una pieza única e irrepetible.",
  },
  {
    id: 2,
    slug: "vela-vidrio",
    name: "Vela Vidrio",
    price: 23000,
    image: imgVidrio,
    description:
      "La vela en recipiente de vidrio transparente permite apreciar la belleza de la cera mientras se derrite. Formulada con 70% cera de soya y 30% parafina premium para una combustión perfecta. El vidrio conserva el calor de forma uniforme, potenciando la liberación del aroma y creando una atmósfera cálida y acogedora en cualquier espacio.",
  },
  {
    id: 3,
    slug: "vela-bambu",
    name: "Vela Bambú",
    price: 45000,
    image: imgBambu,
    description:
      "Nuestra vela premium en empaque de bambú sostenible representa lo mejor de Avela. Con una mezcla de 70% cera de soya y 30% parafina de alta calidad, ofrece la quema más limpia y prolongada de nuestra colección. El bambú, material renovable y resistente, aporta una estética natural y sofisticada que la convierte en el regalo perfecto.",
  },
];
