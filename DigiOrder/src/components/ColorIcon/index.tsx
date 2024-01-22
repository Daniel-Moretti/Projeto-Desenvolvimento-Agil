import React from 'react';
import { Image, View, Text, ImageSourcePropType } from 'react-native';
import { styles } from './styles';
import { Icons } from '../ComponentCatalog/iconColors';

interface ColorIconProps {
  colorName: String;
  icon: ImageSourcePropType;
}

function ColorIcon({ icon, colorName }: ColorIconProps) {
  return (
    <View style={styles.colorItem}>
      <Text >{colorName}</Text>
      <Image source={icon} style={styles.colorIcon} />
    </View>
  );
}

export default ColorIcon;
