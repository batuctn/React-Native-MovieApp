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
        {/* {user ? <MovieNavigaiton /> : <AuthNavigaiton />} */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default Router;
