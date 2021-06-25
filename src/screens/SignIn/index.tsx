import React from 'react';
import {
  View,
  Image,
  Text,
  Alert,
  ActivityIndicator
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import Background from '../../components/Background';
import ButtonIcon from '../../components/ButtonIcon';
import styles from './styles';
import { useAuth } from '../../hooks/auth';
import { theme } from '../../global/styles/theme';

const SignIn: React.FC = () => {
  const { signIn, loading } = useAuth();

  async function handleSigIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error)
    }
  };

  return (
    <Background>
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

            { loading
             ? 
                <ActivityIndicator color={ theme.colors.primary}/>
              :
                <ButtonIcon
                  title='Entar com o Discord'
                  onPress={handleSigIn}
                />
            }
        </View>
      </View>
    </Background>
  )
}

export default SignIn;