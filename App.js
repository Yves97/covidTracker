import React, {Component} from 'react';

//IMPORT CONFIG & DEPENDENCIES
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faHome,faSearch,faInfo } from '@fortawesome/free-solid-svg-icons'

//IMPORT SCREENS
import Home from './screens/home/home'
import News from './screens/news/news'
import Search from './screens/search/search'

//IMPORT COMPONENTS


//TAB NAVIGATOR
const Tab = createBottomTabNavigator()

function App(){
    return (
      <NavigationContainer>
        <Tab.Navigator
                  screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
          
                      if (route.name === 'home') {
                        iconName = faHome
                      } else if (route.name === 'news') {
                        iconName =  faInfo
                      }
                      else if (route.name === 'search') {
                        iconName =faSearch
                      }
          
                      
                      return <FontAwesomeIcon icon={iconName}  />;
                    },
                  })}
                  tabBarOptions={{
                    activeTintColor: '#ab4d8b',
                    inactiveTintColor: 'gray',
                  }}
        >
          <Tab.Screen name="home" component={Home} />
          <Tab.Screen name="news" component={News} />
          <Tab.Screen name="search" component={Search} />
        </Tab.Navigator>
      </NavigationContainer>
    );
}

export default App

