import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-paper';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import CustomButton from '../components/CustomButton';
import {useDispatch} from 'react-redux';
import {setUser} from '../store';
import CustomInput from '../components/CustomInput';

const SignIn = () => {
  const dispatch = useDispatch();
  const [userTeam, setUserTeam] = useState({
    username: '',
    password: '',
  });
  const {navigate} = useNavigation();
  const [showPassword, setShowPassword] = useState(true);

  const handleLogin = async () => {
    await axios
      .get('http://10.0.2.2:3000/register')
      .then(res => {
        res.data.map(item => {
          if (
            item.username === userTeam.username &&
            item.password === userTeam.password
          ) {
            AsyncStorage.setItem('userStorage', JSON.stringify(item));
            AsyncStorage.getItem('userStorage').then(parserespo => {
              const parsedata = JSON.parse(parserespo);
              console.log('parserespo', parserespo);

              dispatch(
                setUser({
                  username: parsedata.username,
                  password: parsedata.password,
                  mail: parsedata.mail,
                  id: parsedata.id,
                }),
              );
            });
          }
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    AsyncStorage.getItem('userStorage')
      .then(parserespo => {
        const parsedata = JSON.parse(parserespo);
        console.log('parserespo', parserespo);

        dispatch(
          setUser({
            username: parsedata.username,
            password: parsedata.password,
            mail: parsedata.mail,
            id: parsedata.id,
          }),
        );
      })
      .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.view}>
      <CustomInput
        placeholder="Username"
        value={userTeam.username}
        onChangeText={text => {
          setUserTeam({...userTeam, username: text});
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
