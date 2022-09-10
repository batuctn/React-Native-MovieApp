import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  scrollview: {
    margin: 10,
    padding: 10,
  },
  backDropImage: {
    height: 200,
    width: '95%',
    alignSelf: 'center',
  },
  iconview: {flexDirection: 'row', justifyContent: 'space-evenly', padding: 10},
  texttitle: {textAlign: 'left', fontSize: 25, marginLeft: 10},
  movieName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  littletext: {
    fontSize: 18,
    fontWeight: '350',
    padding: 10,
  },
  genres: {
    flexDirection: 'row',
    width: '100%',
  },
  genrestext: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    backgroundColor: '#e3e3e3',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
});
