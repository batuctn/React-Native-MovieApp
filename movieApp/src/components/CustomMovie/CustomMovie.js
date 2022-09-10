import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from '../CustomMovie/CustomMovieStyle';
import {useSelector} from 'react-redux';

const CustomMovie = ({uri, MoiveTittle, Descirption, vote_avage}) => {
  const theme = useSelector(state => state.theme.activeTheme);
  return (
    <View style={styles.contain}>
      <Image
        resizeMode="contain"
        source={{uri: `${'https://image.tmdb.org/t/p/original/'}` + `${uri}`}}
        style={styles.image}
      />
      <View style={styles.textsWiew}>
        <Text
          style={
            theme === 'light' ? styles.movieTitleLight : styles.movieTitleDark
          }>
          {MoiveTittle}
        </Text>

        <Text
          numberOfLines={4}
          style={
            theme === 'light' ? styles.descirptionLight : styles.descirptionDark
          }>
          {Descirption}
        </Text>

        <Text style={styles.vote}>{vote_avage}</Text>
      </View>
    </View>
  );
};

export default CustomMovie;
