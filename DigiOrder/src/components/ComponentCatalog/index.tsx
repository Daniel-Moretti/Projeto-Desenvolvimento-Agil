import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './styles'
import { Product } from './productData';
import { Icons } from '../ColorIcon/iconColors';
import ColorIcon from '../ColorIcon';

interface CustomComponentProps {
    product: Product;
    icon: Icons;
}

export function ComponentCatalog({ product, icon }: CustomComponentProps) {

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
                <ColorIcon />

            </View>
        </View>
    );
}
