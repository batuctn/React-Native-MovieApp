import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import Theme from '../screens/Theme';

const Stack = createNativeStackNavigator();
const ProfileStackNavigation = () => {
  return (
    <Stack.Navigator>
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
