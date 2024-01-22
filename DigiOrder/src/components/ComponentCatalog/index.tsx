import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './styles'
import { Product } from './productData';
import { Icons } from './iconColors';
import ColorIcon from '../ColorIcon';

interface ProductProps {
    product: Product;
}

interface IconsProps {
    icon: Icons;

}


export function ComponentCatalog({ product }: ProductProps, { icon }: IconsProps) {

    return (
        <View style={styles.container}>
            <View >
                <Image source={product.image} style={styles.image} />
            </View>
            <Text>{product.description}</Text>
            <Text>Código: {product.code}</Text>
            <Text>Grade: {product.sizes.join(' - ')}</Text>
            <Text>Colors:</Text>
            <View style={styles.colorsContainer}>
                <ColorIcon icon={require("D:/Projetos/Projeto-Desenvolvimento-Agil/DigiOrder/assets/icons-colors/azul-icon.png")} colorName={"Azul VeryPerry"} />
                <ColorIcon icon={require("D:/Projetos/Projeto-Desenvolvimento-Agil/DigiOrder/assets/icons-colors/black-icon.png")} colorName={"Preto"} />
                <ColorIcon icon={require("D:/Projetos/Projeto-Desenvolvimento-Agil/DigiOrder/assets/icons-colors/etereo-icon.png")} colorName={"Verde-Etereo"} />
                <ColorIcon icon={require("D:/Projetos/Projeto-Desenvolvimento-Agil/DigiOrder/assets/icons-colors/nude-icon.png")} colorName={"Nude"} />
                <ColorIcon icon={require("D:/Projetos/Projeto-Desenvolvimento-Agil/DigiOrder/assets/icons-colors/odalisca-icon.png")} colorName={"Odalisca"} />
                <ColorIcon icon={require("D:/Projetos/Projeto-Desenvolvimento-Agil/DigiOrder/assets/icons-colors/pantera-icon.png")} colorName={"Rosa-Pantera"} />
                <ColorIcon icon={require("D:/Projetos/Projeto-Desenvolvimento-Agil/DigiOrder/assets/icons-colors/red-icon.png")} colorName={"Vermelho"} />
                <ColorIcon icon={require("D:/Projetos/Projeto-Desenvolvimento-Agil/DigiOrder/assets/icons-colors/romance-icon.png")} colorName={"Rosa-Romance"} />
            </View>
        </View>
    );
}
