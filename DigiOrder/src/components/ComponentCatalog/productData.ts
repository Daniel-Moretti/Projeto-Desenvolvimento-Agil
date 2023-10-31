// productData.ts
import productJson from "D:/Projetos/Projeto-Desenvolvimento-Agil/DigiOrder/Data/products.json"; // Substitua pelo caminho real do arquivo JSON

interface ColorInfo {
  color: string;
  icon: string;
}

export interface Product {
  id: number;
  image: string;
  description: string;
  code: string;
  sizes: string[];
  colors: ColorInfo[];
}

const productData: Product[] = productJson;

export default productData;
