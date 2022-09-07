import {View, StyleSheet, TextInput} from 'react-native';
import React from 'react';

const Search = () => {
  return (
    <View style={styles.contain}>
      <TextInput
        placeholder="Search"
        placeholderTextColor="#a9a9a9"
        style={styles.search}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  contain: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  search: {
    backgroundColor: '#e9e9e9',
    borderRadius: 10,
    height: 35,
    marginBottom: 7,
    width: '90%',
  },
});
