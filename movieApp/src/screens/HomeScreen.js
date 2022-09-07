import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const {navigate} = useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text
        onPress={() => {
          navigate('MovieDetails');
        }}>
        Moive Details
      </Text>
    </View>
  );
};

export default HomeScreen;
