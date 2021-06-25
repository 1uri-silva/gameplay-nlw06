import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';

import Home from '../screens/Home';
import AppointmentsDetails from '../screens/AppointmentsDetails';
import AppointmentsCreate from '../screens/AppointmentsCreate';

const { Navigator, Screen } = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Navigator
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor:  theme.colors.secondary100,
        }
      }}
    >      
      <Screen name='Home' component={Home}/>
      <Screen name='AppointmentsDetails' component={AppointmentsDetails}/>
      <Screen name='AppointmentsCreate' component={AppointmentsCreate}/>
    </Navigator>
  );
}

export default AppRoutes;