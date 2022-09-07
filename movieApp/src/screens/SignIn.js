import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import CustomButton from '../components/CustomButton';

const SignIn = () => {
  const [userTeam, setUserTeam] = useState({
    userName: '',
    password: '',
  });
  const {navigate} = useNavigation();
  const [showPassword, setShowPassword] = useState(true);

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://10.110.213.34:9090/users/login',
        userTeam,
      );

      AsyncStorage.setItem('user', JSON.stringify(response.data));
      AsyncStorage.setItem('userId', JSON.stringify(response.data.id));
      console.warn('Hoşgeldiniz');
      navigate('Home');
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <View style={styles.view}>
      <CustomInput
        placeholder="Username"
        value={userTeam.userName}
        onChangeText={text => {
          setUserTeam({...userTeam, userName: text});
        }}
        right={<TextInput.Icon name="account" color={'black'} />}
      />

      <CustomInput
        placeholder="Password"
        value={userTeam.password}
        onChangeText={text => {
          setUserTeam({...userTeam, password: text});
        }}
        secureTextEntry={showPassword}
        right={
          <TextInput.Icon
            name="eye"
            color={'black'}
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          />
        }
      />
      <CustomButton
        title={'Sign In'}
        onPress={() => {
          handleLogin();
        }}
      />
      <Pressable
        onPress={() => {
          navigate('SignUp');
        }}>
        <Text>Don't have an account yet? Why not register?</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'e8e8e8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxHeight: 300,
    maxWidth: 300,
    margin: 20,
    marginRight: 50,
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'column',
    margin: 30,
  },
});
export default SignIn;
