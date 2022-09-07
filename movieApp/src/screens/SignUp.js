import React, {useState} from 'react';
import {TouchableOpacity, Linking, Alert} from 'react-native';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {Checkbox, TextInput} from 'react-native-paper';
import CustomInput from '../components/CustomInput';
import axios from 'axios';
import CustomButton from '../components/CustomButton';

const SignUp = () => {
  const [checked, setChecked] = useState(false);
  const [checkedPassword, setCheckedPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [registerTeam, setRegisterTeam] = useState({
    mail: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const handleClick = async () => {
    try {
      if (
        registerTeam.password === registerTeam.confirmPassword &&
        registerTeam.confirmPassword !== '' &&
        registerTeam.password !== ''
      ) {
        if (registerTeam.username !== '' && registerTeam.mail !== '') {
          setCheckedPassword(true);
          Alert.alert('Register Succesfly');
        }
      } else {
        Alert.alert('Password dosent match');
      }
      await axios.post('http://10.110.213.66:9090/users/addUser', registerTeam);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <SafeAreaView style={styles.View}>
      <CustomInput
        placeholder="E-mail"
        value={registerTeam.mail}
        onChangeText={text => {
          setRegisterTeam({...registerTeam, mail: text});
        }}
        right={<TextInput.Icon name="mail" color={'black'} />}
      />
      <CustomInput
        placeholder="Username"
        value={registerTeam.username}
        onChangeText={text => {
          setRegisterTeam({...registerTeam, username: text});
        }}
        right={<TextInput.Icon name="account" color={'black'} />}
      />
      <CustomInput
        placeholder="Password"
        value={registerTeam.password}
        onChangeText={text => {
          setRegisterTeam({...registerTeam, password: text});
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
      <CustomInput
        placeholder="Confirm Password"
        value={registerTeam.confirmPassword}
        onChangeText={text => {
          setRegisterTeam({...registerTeam, confirmPassword: text});
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
      <View style={styles.checkbox}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://policies.google.com/privacy?hl=en-US')
          }>
          <Text>I have read the terms of use and privacy policy</Text>
        </TouchableOpacity>
      </View>
      <CustomButton
        title={'Sign Up'}
        disabled={!checked && checkedPassword}
        onPress={() => {
          handleClick();
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  View: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default SignUp;
