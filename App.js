import React, {Component} from 'react';

//IMPORT CONFIG & DEPENDENCIES
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//IMPORT SCREENS
import Home from './screens/home/home'
import News from './screens/news/news'
import Search from './screens/search/search'
//IMPORT COMPONENTS


//STACK NAVIGATOR
const Stack = createStackNavigator()

export default function App(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="news" component={News} />
          <Stack.Screen name="search" component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}


