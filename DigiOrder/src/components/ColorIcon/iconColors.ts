import { ImageSourcePropType } from "react-native";

export interface Icons {
  colorName: string;
  icon: ImageSourcePropType;
}


const iconColors: Icons[] = [
  {
    colorName: "Very Perry",
    icon: require("D:/Projetos/Projeto-Desenvolvimento-Agil/DigiOrder/assets/icons-colors/azul-icon.png")
  }
];

export default iconColors;
