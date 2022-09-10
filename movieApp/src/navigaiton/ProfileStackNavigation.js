import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screens/Profile/Profile';

import {useSelector} from 'react-redux';
import EditProfile from '../screens/EditProfile/EditProfile';
import Theme from '../screens/Theme/Theme';

const Stack = createNativeStackNavigator();
const ProfileStackNavigation = () => {
  const theme = useSelector(state => state.theme.activeTheme);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme === 'light' ? null : '#363636',
        },
        headerTitleStyle: {
          color: theme === 'light' ? '#900' : '#cfcfcf',
        },
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        options={{
          headerShadowVisible: false,
        }}
        name="Theme"
        component={Theme}
      />
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          title: 'Edit Profile',
        }}
        name="EditProfile"
        component={EditProfile}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigation;
