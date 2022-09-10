import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import CustomMovie from '../../components/CustomMovie/CustomMovie';
import {useSelector} from 'react-redux';
import styles from './HomeScreenStyle';

const titledata = [
  {
    genre: 'top_rated',
    value: 'Top Rated',
  },
  {
    genre: 'now_playing',
    value: 'Now Playing',
  },
  {
    genre: 'popular',
    value: 'Popular',
  },
  {
    genre: 'upcoming',
    value: 'Up Coming',
  },
];
const HomeScreen = () => {
  const [posts, setPosts] = useState([]);
  const [genres, setGenres] = useState('top_rated');
  const {navigate} = useNavigation();
  const theme = useSelector(state => state.theme.activeTheme);
  const [refreshing, setRefreshing] = useState(true);
  const onRefresh = () => {
    //Clear old data of the list
    setPosts([]);
    //Call the Service to get the latest data
  };

  useEffect(() => {
    axios
      .get(
        `${'https://api.themoviedb.org/3/movie/'}` +
          `${genres}` +
          `${'?api_key=67c2b818143797a56bbc23d8cba1331e&language=en-US&page=1'}`,
      )
      .then(respo => {
        setPosts(respo.data.results);
        setRefreshing(false);
      });
  }, [genres]);

  const renderMovieItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigate('MovieDetails', {
            backdrop_path: item.backdrop_path,
            descirption: item.overview,
            moviename: item.title,
            genres: item.genre_ids,
            release_date: item.release_date,
            vote_avage: item.vote_average,
            vote_count: item.vote_count,
            popularity: item.popularity,
          });
        }}>
        <View>
          <CustomMovie
            uri={item.poster_path}
            Descirption={item.overview}
            MoiveTittle={item.title}
            vote_avage={item.vote_average}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={theme === 'light' ? null : styles.contain}>
      <ScrollView horizontal>
        <View style={styles.scrolView}>
          {titledata.map((item, index) => {
            return (
              <View key={index} style={styles.genresView}>
                <Text
                  style={styles.genres}
                  onPress={() => {
                    setGenres(item.genre);
                  }}>
                  {item.value}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <FlatList
        data={posts}
        renderItem={renderMovieItem}
        keyExtractor={(item, index) => `posts-${item.id}`}
        maxToRenderPerBatch={10}
        refreshControl={
          <RefreshControl
            //refresh control used for the Pull to Refresh
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </View>
  );
};

export default HomeScreen;
