import React from 'react';
import { Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import { categories } from '../../utils/categories';
import GuildIcon from '../Guild';

import Player from '../../assets/player.svg';
import Calendar from '../../assets/calendar.svg';

import styles from './styles';
import { theme } from '../../global/styles/theme';

import { GuildProps } from '../GuildItems';

export type AppointmentsProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

type Props = RectButtonProps & {
  data: AppointmentsProps
}

const Appointments: React.FC<Props> = ({data, ...rest}) => {

  const [category] = categories.filter( item => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on, secondary50, secondary70 } = theme.colors;

  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <View style={styles.container}>
        <LinearGradient style={styles.guildIcon}
          colors={[ secondary50, secondary70 ]}
        >
        <GuildIcon />
        </LinearGradient>

        <View style={styles.content}>

          <View style={styles.header}>
            <Text style={styles.title}>
              {data.guild.name}
            </Text>

            <Text style={styles.category}>
              {category.title}
            </Text>
          </View>

          <View style={styles.footer}>

            <View style={styles.dateInfo}>
              <Calendar />
              <Text style={styles.date}>
                {data.date}
              </Text>
            </View>

            <View style={styles.playerInfo}>

              <Player fill={ owner ? primary : on}/>
              <Text style={[styles.player, { color: owner ? primary : on}]}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </Text>

            </View>
          </View>
        </View>
      </View>

    </RectButton>
  );
}

export default Appointments;