import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './styles'
import { Product } from './productData';

interface CustomComponentProps {
    product: Product;
}

export function ComponentCatalog({ product }: CustomComponentProps) {

    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text> {product.description}</Text>
            <Text>Código: {product.code}</Text>
            <Text>Grade: {product.sizes.join(', ')}</Text>
            <Text>Colors:</Text>
            <View style={styles.colorsContainer}>
                {product.colors.map((colorInfo, index) => (
                    <View key={index} style={styles.colorItem}>
                        <Image source={{ uri: colorInfo.icon }} style={styles.colorIcon} />
                    </View>
                ))}
            </View>
        </View>
    );
}
