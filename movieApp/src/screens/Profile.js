import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const {navigate} = useNavigation();
  return (
    <View>
      <Text
        onPress={() => {
          navigate('Theme');
        }}>
        {' '}
        Go theme
      </Text>
      <Text
        onPress={() => {
          navigate('EditProfile');
        }}>
        Go edit profile
      </Text>
    </View>
  );
};

export default Profile;
