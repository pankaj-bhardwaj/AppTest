/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FirstScreen from './Screens/FirstScreen';
import SecondScreen from './Screens/SecondScreen';
import ThirdScreen from './Screens/ThirdScreen';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{title: 'First Screen', headerLeft: null}}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{title: 'Second Screen', headerLeft: null}}
        />
        <Stack.Screen
          name="ThirdScreen"
          component={ThirdScreen}
          options={{title: 'Third Screen', headerLeft: null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
