import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import GuildIcon from '../Guild';
import styles from './styles';
import { theme } from '../../global/styles/theme';

export type GuildProps = {
  id: string,
  name: string;
  icon: string | null;
  owner: boolean;
}

type Props = TouchableOpacityProps & {
  data: GuildProps;
}

const GuildItems: React.FC<Props> = ({data, ...rest}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
        {...rest}
    >
        <GuildIcon />

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>
            {data.name}
          </Text>

          <Text style={styles.type}>
            {data.owner ? 'Administrador' : 'Convidado'}
          </Text>
        </View>
      </View>

      <Feather
        name='chevron-right'
        color={theme.colors.heading}
        size={24}
      />
    </TouchableOpacity>
  );
}

export default GuildItems;