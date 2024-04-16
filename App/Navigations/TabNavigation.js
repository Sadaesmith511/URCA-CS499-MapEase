import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home.js';
import Fav from '../Screens/Fav.js';
import Search from '../Screens/Search.js';
import Profile from '../Screens/Profile.js'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function TabNavigation() {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false
    }}>
    <Tab.Screen name="Home" component={Home} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="home" size={24} color="rgba(48, 41, 47, 1)" />
        ),
      }}
    />
    <Tab.Screen name="Search" component={Search}
    options={{
      tabBarLabel: 'Search',
      tabBarIcon: ({color, size}) => (
      <MaterialCommunityIcons name="map-search-outline" size={24} color="rgba(48, 41, 47, 1)" />
      ),
    }}
    />    
    <Tab.Screen name="Fav" component={Fav} 
    options={{
      tabBarLabel: 'Favorites',
      tabBarIcon: ({color, size}) => (
        <MaterialCommunityIcons name="map-marker-star" size={24} color="rgba(48, 41, 47, 1)" />
      ),
    }}
    />
  </Tab.Navigator>
  )
}