import {View, Image, Text, ScrollView} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './MovieDetailsStyle';

const MovieDetails = ({route, navigation}) => {
  const [genresState, setGenresState] = useState([]);
  const {
    backdrop_path,
    descirption,
    moviename,
    genres,
    release_date,
    vote_avage,
    vote_count,
    popularity,
  } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: moviename === '' ? 'No title' : moviename,
    });
  }, [navigation, moviename]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=67c2b818143797a56bbc23d8cba1331e&language=en-TR',
      )
      .then(respo => {
        setGenresState(respo.data.genres);
      });
  }, []);
  return (
    <ScrollView>
      <View style={styles.scroll}>
        <Image
          style={styles.backDropImage}
          source={{
            uri:
              `${'https://image.tmdb.org/t/p/original/'}` + `${backdrop_path}`,
          }}
        />
        <View style={styles.iconview}>
          <Icon name="star" size={20} color="#900" />
          <Text>{vote_avage}</Text>
          <Icon name="people" size={20} color="#900" />
          <Text>{vote_count}</Text>
          <Icon name="play" size={20} color="#900" />
          <Text>{popularity}</Text>
        </View>
        <Text style={styles.movieName}>{moviename}</Text>
        <Text style={styles.texttitle}>Descirption</Text>
        <Text style={styles.litletext}>{descirption}</Text>
        <Text style={styles.texttitle}>Release Date</Text>
        <Text style={styles.texttitle}>{release_date}</Text>
        <Text style={styles.texttitle}>Genres</Text>
        <View style={styles.genres}>
          {genresState
            .filter(genre => genres.includes(genre.id))
            .map((item, index) => {
              return (
                <View key={index}>
                  <Text style={styles.genrestext}>{item.name}</Text>
                </View>
              );
            })}
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieDetails;
