import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

import Login from './screens/Auth/Login'
import Welcome from './screens/Auth/Welcome'
import Home from './screens/Auth/Home'

const Stack=createStackNavigator()

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={
            {
              headerShown:false
            }
          }
          initialRouteName={'Home'}
        >
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Welcome' component={Welcome} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}