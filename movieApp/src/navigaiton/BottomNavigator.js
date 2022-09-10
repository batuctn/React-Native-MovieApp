import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import HomeScreen from '../screens/Home/HomeScreen';

import SearchScreen from '../screens/SearchScreen/SearchScreen';

import ProfileStackNavigation from './ProfileStackNavigation';
const BottomTabs = createBottomTabNavigator();

const BottomNavigator = () => {
  const theme = useSelector(state => state.theme.activeTheme);
  return (
    <BottomTabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarLabelStyle: {color: theme === 'light' ? '#900' : '#9c9c9c'},
      }}>
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarStyle: {
            borderTopWidth: 0,
            borderTopColor: 'transparent',
          },
          headerShadowVisible: false,
          tabBarLabel: 'Movies',
          tabBarIcon: ({size, focused}) => (
            <MaterialCommunityIcons
              name={`movie-star${focused ? '' : '-outline'}`}
              color={theme === 'light' ? '#900' : '#9c9c9c'}
              size={size + 5}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarStyle: {
            borderTopWidth: 0,
            borderTopColor: 'transparent',
          },
          headerShadowVisible: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({size, focused}) => (
            <Ionicons
              name={`search${focused ? '' : '-outline'}`}
              color={theme === 'light' ? '#900' : '#9c9c9c'}
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
          tabBarIcon: ({size, focused}) => (
            <Ionicons
              name={`settings${focused ? '' : '-outline'}`}
              color={theme === 'light' ? '#900' : '#9c9c9c'}
              size={size + 5}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomNavigator;
