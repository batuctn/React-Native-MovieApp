import {View, StyleSheet, Button} from 'react-native';
import React from 'react';

const CustomButton = ({title, onPress, disabled}) => {
  return (
    <View style={styles.button}>
      <Button
        title={title}
        onPress={onPress}
        disabled={disabled}
        color={'gray'}
      />
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: '90%',
    borderColor: '#666',
    marginVertical: 10,
    borderRadius: 10,
  },
});
