import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileStackNavigation from './ProfileStackNavigation';
const BottomTabs = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <BottomTabs.Navigator initialRouteName="Home">
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarStyle: {
            borderTopWidth: 0,
            borderTopColor: 'transparent',
          },
          headerShadowVisible: false,
          tabBarLabel: 'Movies',
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              name={`movie-star${focused ? '' : '-outline'}`}
              color={color}
              size={size + 5}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarStyle: {
            borderTopWidth: 0,
            borderTopColor: 'transparent',
          },
          headerShadowVisible: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              name={`chatbubbles${focused ? '' : '-outline'}`}
              color={color}
              size={size + 5}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="ProfileStack"
        component={ProfileStackNavigation}
        options={{
          tabBarStyle: {
            borderTopWidth: 0,
            borderTopColor: 'transparent',
          },
          headerShown: false,
          headerShadowVisible: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              name={`settings${focused ? '' : '-outline'}`}
              color={color}
              size={size + 5}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomNavigator;
