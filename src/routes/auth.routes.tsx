import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import { theme } from '../global/styles/theme';
import AppointmentsDetails from '../screens/AppointmentsDetails';
import AppointmentsCreate from '../screens/AppointmentsCreate';

const { Navigator, Screen } = createStackNavigator();

const Auth: React.FC = () => {
  return (
    <Navigator
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor:  theme.colors.secondary100,
        }
      }}
    >
      <Screen name='SignIn' component={SignIn}/>
      <Screen name='Home' component={Home}/>
      <Screen name='AppointmentsDetails' component={AppointmentsDetails}/>
      <Screen name='AppointmentsCreate' component={AppointmentsCreate}/>
    </Navigator>
  );
}

export default Auth;