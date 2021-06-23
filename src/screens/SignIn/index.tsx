import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import ButtonIcon from '../../components/ButtonIcon';
import styles from './styles';

const SignIn: React.FC = () => {
  const navigate = useNavigation();

  function handleSigIn() {
    navigate.navigate('Home')
  };

  return (
    <View style={styles.container}>

      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode='stretch'
      />
      
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize suas {'\n'}
          jogatinas.
        </Text>

        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>

          <ButtonIcon
          title='Entar com o Discord'
          onPress={handleSigIn}
          />
      </View>
    </View>
  )
}

export default SignIn;