import {StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

const CustomInput = ({
  value,
  label,
  left,
  onChangeText,
  disabled,
  placeholder,
  secureTextEntry,
  right,
}) => {
  return (
    <TextInput
      mode="outlined"
      activeOutlineColor="#3390ec"
      outlineColor="#dfe1e5"
      label={label}
      value={value}
      onChangeText={onChangeText}
      maxLength={10}
      style={styles.textInput}
      left={left}
      disabled={disabled}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      right={right}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  textInput: {
    width: '90%',
    borderRadius: 15,
    margin: 5,
  },
});
