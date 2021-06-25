import React, { useState } from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import CategorySelect from '../../components/CategorySelect';
import Header from '../../components/Header';
import GuildIcon from '../../components/Guild';
import SmallInput from '../../components/SmallInput';
import TextArea from '../../components/TextArea';

import { theme } from '../../global/styles/theme';
import styles from './styles';
import Button from '../../components/Button';
import ModalView from '../../components/Modal';
import Guilds from '../Guilds';
import Background from '../../components/Background';

import { GuildProps } from '../../components/GuildItems';


const AppointmentsCreate: React.FC = () => {
  const [category, setCategory] = useState('');
  const [openGuild, setOpenGuild] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleSetCategory(categoryId: string) {
   setCategory(categoryId);
  }

  function handleOpenGuilds() {
    setOpenGuild(true)
  }

  function handleClose() {
    setOpenGuild(false)
  }

  function handleGuildsSelected(guidSelected: GuildProps) {
    setGuild(guidSelected)
    setOpenGuild(false)
  }


  return(
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
    <Background>

      <ScrollView>
        <Header title='Agendar partida'/>

          <Text style={[
            styles.label,
            { marginLeft: 24, marginTop: 36, marginBottom: 18 }
          ]}>
            Categoria
          </Text>

          <CategorySelect 
            hasCheckBox
            setCategory={handleSetCategory}
            categorySelect={category}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>

              <View style={styles.select}> 
                {
                  guild.icon ? <GuildIcon/> : <View style={styles.image}/>
                }
                  <View style={styles.selectBody}>
                    <Text style={styles.label}>
                      { guild.name ? guild.name : 'Selecione um servidor'}
                    </Text>
                  </View>
                <Feather name='chevron-right' size={18} color={theme.colors.heading} />
              </View>
            
            </RectButton>
            
            <View style={styles.field}>
              <View>
                  <Text style={[styles.label, { marginBottom: 12 }]}>Dia e mês</Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />

                  <Text style={styles.divider}> / </Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>Hora e minuto</Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />

                  <Text style={styles.divider}> : </Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>
                Descrição
              </Text>

              <Text style={styles.cracteresLimit}>
                Max 100 caracteres
              </Text>
            </View>

              <TextArea 
                multiline
                maxLength={100}
                numberOfLines={5}
                autoCorrect={false}
              />
            <View style={styles.footer}>
              <Button title='Agendar'/>
            </View>
          </View>
        </ScrollView>
      </Background>

      <ModalView visible={openGuild} closeModal={handleClose}>
        <Guilds handleGuildsSelect={handleGuildsSelected}/>
      </ModalView>
    </KeyboardAvoidingView>
  )
}

export default AppointmentsCreate;