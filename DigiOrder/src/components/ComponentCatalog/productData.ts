import { ImageSourcePropType } from "react-native";
export interface Product {
  id: number;
  image: ImageSourcePropType;
  description: string;
  code: string;
  sizes: string[];
}


const productData: Product[] = [
  {
    id: 1,
    image: require("D:/Projetos/Projeto-Desenvolvimento-Agil/DigiOrder/assets/FotosCatalogo/foto1.png"),
    description: "Body em Renda",
    code: "900",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: 2,
    image: require("D:/Projetos/Projeto-Desenvolvimento-Agil/DigiOrder/assets/FotosCatalogo/foto2.png"),
    description: "Body em tule",
    code: "800",
    sizes: ["P", "M", "G", "GG"],
  },
];

export default productData;
