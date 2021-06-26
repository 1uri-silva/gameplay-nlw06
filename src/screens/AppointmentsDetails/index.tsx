import React, { useEffect, useState } from 'react';
import { Alert, FlatList, ImageBackground, Text, View, Share, Platform } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import Banner from '../../assets/banner.png'
import Background from '../../components/Background';
import Header from '../../components/Header';
import ListHeader from '../../components/ListHeader';
import Member, { MemberProps } from '../../components/Member';
import ListDivider from '../../components/ListDivider';
import ButtonIcon from '../../components/ButtonIcon';

import { theme } from '../../global/styles/theme';
import styles from './styles';
import { AppointmentsProps } from '../../components/Appointments';
import api from '../../services/api';
import Loading from '../../components/Loading';

type Params ={
  guildSelected: AppointmentsProps;
}

type GuildWidget = {
  id: string,
  name: string;
  instant_invite: string;
  members: MemberProps[];
}

const AppointmentsDetails: React.FC = () => {
  const route = useRoute();

  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);

  const { guildSelected } = route.params as Params;
  
  async function fetchWidgetInfo() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
      
      setWidget(response.data);
    } catch {
      Alert.alert('Verifique as configurações do servidor. Será que o widget está habilitado?');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWidgetInfo();
  }, []);

  function handleShareInvite() {
    const message = Platform.OS === 'ios'
    ? `Junte-se a ${guildSelected.guild.name}`
    : widget.instant_invite;

  Share.share({
    message,
    url: widget.instant_invite
  });
  }

  function handleOpenGuild() {
    const urlInvite = widget.instant_invite;

    urlInvite ? Linking.openURL(widget.instant_invite) : Alert.alert('Você não tem um link de invite');
  }

  return(
    <Background>
      <Header title='Detalhes' action={
        guildSelected.guild.owner && (
          <BorderlessButton onPress={handleShareInvite}>
            <Fontisto name='share' size={24} color={theme.colors.primary} />
          </BorderlessButton>
        )
      }/>

      <ImageBackground
        source={Banner}
        style={styles.banner}
      >
        <View style={styles.content}>
          <Text style={styles.title}>
            { guildSelected.guild.name }
          </Text>

          <Text style={styles.subTitle}>
            { guildSelected.description }
          </Text>
        </View>

      </ImageBackground>

        {
          loading ?
            <Loading/>
          : 
          <>
            <ListHeader
              title='Jogadores'
              subTitle={`Total ${widget.members.length ? widget.members.length : 0}`}
            />

            <FlatList
              data={widget.members}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={() => <ListDivider isCenter />}
              style={styles.members}
              renderItem={({item}) => (
                <Member data={item} />
              )}
            />
          </>
        }
      {
        guildSelected.guild.owner && (
          <View style={styles.footer}>
            <ButtonIcon title='Entrar na partida'  onPress={handleOpenGuild} />
          </View>
        )
      }

    </Background>
  )
}

export default AppointmentsDetails;