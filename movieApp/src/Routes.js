import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthNavigaiton from './navigaiton/AuthNavigaiton';
import MovieNavigaiton from './navigaiton/MovieNavigation';

function Router() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthNavigaiton />
        {/* <MovieNavigaiton /> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default Router;
