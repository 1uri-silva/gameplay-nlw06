import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {
  View,
  Text,
  Image,
} from 'react-native';

import discordImg from '../../assets/discord.png'
import styles from './styles';

type Props = RectButtonProps & {
  title: string
}

const ButtonIcon: React.FC<Props> = ({title, ...rest}) => {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image
          source={discordImg}
          style={styles.icon}
        />
      </View>
      <Text style={styles.title}>
        {title}
      </Text>

    </RectButton>
  );
}

export default ButtonIcon;