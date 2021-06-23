import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'

import styles from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
  title: string;
  action?: ReactNode;
}
const { secondary100, secondary40, heading } = theme.colors;

const Header: React.FC<Props> = ({ title, action }) => {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={[ secondary100, secondary40 ]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather
          name='arrow-left'
          size={24}
          color={heading}
        />
      </BorderlessButton>

      <Text style={styles.title}>
        {title}
      </Text>

       {action && (
        <View>
          {action}
        </View>
      )}

    </LinearGradient>
  );
}

export default Header;