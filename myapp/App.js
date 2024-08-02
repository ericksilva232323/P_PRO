import { StatusBar, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';


export default function App(){
  return(
    <NavigationContainer>
      <StatusBar backgroundColor="#A38A69D" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  );
}

