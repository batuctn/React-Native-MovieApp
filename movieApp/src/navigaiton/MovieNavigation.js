import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieDetails from '../screens/MovieDetails';
import BottomNavigator from './BottomNavigator';

const MovieNavigaiton = () => {
  const Movie = createNativeStackNavigator();

  return (
    <Movie.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Movie.Screen name="BottomNavigator" component={BottomNavigator} />
      <Movie.Screen
        options={{
          headerShown: true,
        }}
        name="MovieDetails"
        component={MovieDetails}
      />
    </Movie.Navigator>
  );
};

export default MovieNavigaiton;
