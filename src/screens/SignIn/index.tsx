import React from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import ButtonIcon from '../../components/buttonIcon';
import styles from './styles';

const SignIn: React.FC = () => {
  return (
    <View style={styles.container}>

      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode='stretch'
      />
      
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas{`\n`}
          facilmente
        </Text>

        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

          <ButtonIcon title='Entar com o Discord' />
      </View>
    </View>
  )
}

export default SignIn;