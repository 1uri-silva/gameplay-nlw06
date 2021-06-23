import React from 'react';
import { SvgProps } from 'react-native-svg';
import { Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';
import styles from './styles';

type Props = RectButtonProps & {
  title: string;
  hasCheckBox?: boolean;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}

const Category: React.FC<Props> = ({
  title,
  icon: Icon,
  checked = false,
  hasCheckBox = false,
  ...rest
}) => {

  const { secondary40, secondary50, secondary70, secondary75 } = theme.colors;
  
  return (
    <RectButton {...rest}>
      <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >

      <LinearGradient
        style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
        colors={[ checked ? secondary75 : secondary50, secondary40]}  
      >
        {
          hasCheckBox && (
            <View style={ checked ? styles.checked : styles.check } />

          )
        }
          <Icon
            width={48}
            height={48}
          />

          <Text style={styles.title}>
            {title}
          </Text>

      </LinearGradient>
    </LinearGradient>
    </RectButton>
  );
}

export default Category;