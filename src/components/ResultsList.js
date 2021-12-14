import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({title, results}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titlestyle}>{title}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({item}) => {
          return <ResultsDetail result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titlestyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 12,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default ResultsList;
