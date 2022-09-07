import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';

const AuthNavigaiton = () => {
  const AuthStack = createNativeStackNavigator();

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen
        options={{
          headerShown: true,
        }}
        name="SignUp"
        component={SignUp}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigaiton;
