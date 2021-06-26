import React from 'react';
import { Image, View } from 'react-native';

const { CDN_IMAGE } = process.env;
import Discord from '../../assets/discord.svg'

import styles from './styles';

type Props = {
  guildId: string;
  iconId: string | null;
}
const GuildIcon: React.FC<Props> = ({ guildId, iconId}) => {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`
  
  return (
    <View style={styles.container}>
      {
        iconId ?
          <Image 
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"    
          />
        : 
        <Discord width={40} height={40} />
      }
    </View>
  );
}

export default GuildIcon;