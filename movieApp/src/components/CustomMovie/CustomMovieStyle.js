import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  contain: {flexDirection: 'row', alignItems: 'center', margin: 5},
  image: {
    width: 125,
    height: 125,
    borderRadius: 10,
  },
  textsWiew: {
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    maxHeight: 150,
    flex: 1,
  },
  movieTitleLight: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  movieTitleDark: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d3d3d3',
  },
  descirptionLight: {fontSize: 16},
  descirptionDark: {color: '#696969'},
  vote: {fontSize: 18, fontWeight: 'bold'},
});
