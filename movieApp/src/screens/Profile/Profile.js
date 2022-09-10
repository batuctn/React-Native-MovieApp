import {View, Text, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {logout} from '../../store';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../components/CustomButton';
import styles from '../Profile/ProfileStyle';

const Profile = () => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const userInRedux = useSelector(state => state.user.user);
  const theme = useSelector(state => state.theme.activeTheme);

  return (
    //Bu şekildede kullanabilirdim ama inline olduğu için aşşağıda hem dark hem light styles vermek zorunda kaldım hangisi daha doğru kullanım?
    // <View style={{...styles.contain, backgroundColor: theme.backgroundColor}}>
    <View
      style={
        theme === 'light' ? styles.container_light : styles.container_dark
      }>
      <Image
        style={styles.image}
        source={{
          uri: 'https://www.resimnet.net/wp-content/uploads/2021/02/whatsapp-profil-resmi-k8EV8.jpg',
        }}
      />
      <Text style={styles.usernameText}>username:{userInRedux.username}</Text>
      <CustomButton
        title={'Theme'}
        onPress={() => {
          navigate('Theme');
        }}
      />
      <CustomButton
        title={'Edit Profile'}
        onPress={() => {
          navigate('EditProfile');
        }}
      />
      <CustomButton
        title={'Logout'}
        onPress={async () => {
          await AsyncStorage.removeItem('userStorage');
          console.log('basıldı');
          dispatch(logout());
          // navigate('SignIn');
        }}
      />
    </View>
  );
};

export default Profile;
