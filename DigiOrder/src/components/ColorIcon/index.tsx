import React from 'react';
import { Image, View, Text } from 'react-native';
import { styles } from './styles';
import { Icons } from './iconColors';

interface ColorIconProps {
  icons: Icons;
}

function ColorIcon({ icons }: ColorIconProps) {
  return (
    <View style={styles.colorItem}>
      <Text >{icons.colorName}</Text>
      <Image source={icons.icon} style={styles.colorIcon} />
    </View>
  );
}

export default ColorIcon;
