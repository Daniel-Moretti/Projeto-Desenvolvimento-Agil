import React from 'react';
import { View, FlatList } from 'react-native';
import productData from '../../components/ComponentCatalog/productData';
import { ComponentCatalog } from '../../components/ComponentCatalog';
import { styles } from './styles';

export function Catalogo() {
    
  return (
    <View style={styles.container}>
      <FlatList
        data={productData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ComponentCatalog product={item} />}
      />
    </View>
  );
}

