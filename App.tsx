import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {LogBox} from 'react-native';
import AppSplash from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_700Bold, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani';

import Routes from './src/routes';
import Background from './src/components/Background';
import { AuthProvider } from './src/hooks/auth';

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.'])
export default function App() {

  const [fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if(!fontsLoaded){
    return <AppSplash/>
  }
  
  return (
    <Background>

      <AuthProvider>
        <Routes/>
      </AuthProvider>

      <StatusBar
        style="light"
        backgroundColor='transparent'
      />
    </Background>
  );
}

