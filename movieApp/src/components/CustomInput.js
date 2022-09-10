import {StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {useSelector} from 'react-redux';

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
  const theme = useSelector(state => state.theme.activeTheme);
  return (
    <TextInput
      mode="outlined"
      activeOutlineColor="#dfe1e5"
      outlineColor="#900"
      label={label}
      value={value}
      onChangeText={onChangeText}
      style={theme === 'light' ? styles.textInput : styles.textInput_dark}
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
  textInput_dark: {
    width: '90%',
    borderRadius: 15,
    margin: 5,
    backgroundColor: '#d3d3d3',
  },
});
