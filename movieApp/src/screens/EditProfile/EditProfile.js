import {View} from 'react-native';
import React, {useState} from 'react';
import styles from '../EditProfile/EditProfileStyle';
import CustomButton from '../../components/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../../store';
import axios from 'axios';
import CustomInput from '../../components/CustomInput';

const EditProfile = () => {
  const theme = useSelector(state => state.theme.activeTheme);
  const userInRedux = useSelector(state => state.user.user);
  const [newUser, setNewUser] = useState({
    username: '',
    mail: '',
    password: '',
  });
  const handleSave = async () => {
    const requestObject = {
      username: newUser.username,
      password: newUser.password,
      mail: newUser.mail,
    };
    await axios
      .put(`http://10.0.2.2:3000/register/${userInRedux.id}`, requestObject)
      .then(response => {
        console.log(response.data);
        console.log('value', requestObject);
      });
  };

  const dispatch = useDispatch();

  return (
    <View
      style={
        theme === 'light' ? styles.container_light : styles.container_dark
      }>
      <CustomInput
        value={newUser.mail}
        onChangeText={newText => setNewUser({...newUser, mail: newText})}
        label={'E-mail'}
      />
      <CustomInput
        value={newUser.username}
        onChangeText={newText => setNewUser({...newUser, username: newText})}
        label={'Username'}
      />
      <CustomInput
        value={newUser.password}
        onChangeText={newText => setNewUser({...newUser, password: newText})}
        label={'Password'}
      />
      <CustomButton
        title={'Save'}
        onPress={() => {
          dispatch(
            setUser({
              username: newUser.username,
              password: newUser.password,
              mail: newUser.mail,
            }),
          );
          handleSave();
        }}
      />
    </View>
  );
};

export default EditProfile;
