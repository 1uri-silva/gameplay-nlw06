import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

import discordImg from '../../assets/discord.png'
import styles from './styles';

type Props = {
  title: string
}

const ButtonIcon: React.FC<Props> = ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image
          source={discordImg}
          style={styles.icon}
        />
      </View>
      <Text style={styles.title}>
        {title}
      </Text>

    </TouchableOpacity>
  );
}

export default ButtonIcon;