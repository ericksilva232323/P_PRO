// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/login';
import Menu from "./components/menu"
import Quiz from "./components/quiz"

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Welcome' }} />

        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{title: 'NIHAO'}} />

        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{title: '测验'}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}