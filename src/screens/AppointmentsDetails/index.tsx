import React from 'react';
import { FlatList, ImageBackground, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import Banner from '../../assets/banner.png'
import Background from '../../components/Background';
import Header from '../../components/Header';

import ListHeader from '../../components/ListHeader';
import Member from '../../components/Member';
import ListDivider from '../../components/ListDivider';
import { theme } from '../../global/styles/theme';
import styles from './styles';
import ButtonIcon from '../../components/ButtonIcon';

const AppointmentsDetails: React.FC = () => {
  const members = [
    {
      id: '1',
      username: 'Rodrigo',
      avatar_url: 'https://github.com/rd-easy.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Rodrigo',
      avatar_url: 'https://github.com/rd-easy.png',
      status: 'offline'
    }
  ]

  return(
    <Background>
      <Header title='Detalhes' action={
        <BorderlessButton>
          <Fontisto name='share' size={24} color={theme.colors.primary} />
        </BorderlessButton>
      }/>

      <ImageBackground
        source={Banner}
        style={styles.banner}
      >
        <View style={styles.content}>
          <Text style={styles.title}>
            Lendários
          </Text>

          <Text style={styles.subTitle}>
            É hoje que vamos ao challenge sem perder uma partida da md10
          </Text>
        </View>

      </ImageBackground>
      
      <ListHeader
        title='Jogadores'
        subTitle='Total 3'
      />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <ListDivider isCenter />}
        style={styles.members}
        renderItem={({item}) => (
          <Member data={item} />
        )}
      />

      <View style={styles.footer}>
        <ButtonIcon title='Entrar na partida' />
      </View>

    </Background>
  )
}

export default AppointmentsDetails;