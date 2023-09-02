/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import MenuList from './src/components/lists/MenuList';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ItemDetailScreen from './src/screens/ItemDetailScreen';
import MenuScreen from './src/screens/MenuScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Detail" component={ItemDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
