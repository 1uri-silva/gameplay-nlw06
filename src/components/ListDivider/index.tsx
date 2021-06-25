import React from 'react';
import { View } from 'react-native';

import styles from './styles';

type Props = {
  isCenter?: boolean;
}
const ListDivider: React.FC<Props> = ({ isCenter }) => {
  return <View style={[
    styles.container,
    isCenter ? {
      marginVertical: 12
    } : {
      marginTop: 2, marginBottom: 31
    }]}/>;
}

export default ListDivider;