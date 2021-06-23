import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Auth from './auth.routes'

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  );
}

export default Routes;