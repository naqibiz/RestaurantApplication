import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const ResultsDetail = ({result}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.resultimage} source={{uri: result.image_url}} />
      <Text style={styles.resultname}>{result.name}</Text>
      <Text style={styles.ratingreview}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 12,
  },
  resultimage: {
    width: 250,
    height: 170,
    borderRadius: 5,
  },
  resultname: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default ResultsDetail;
