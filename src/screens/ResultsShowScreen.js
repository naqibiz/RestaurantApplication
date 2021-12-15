import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation, route}) => {
  const [result, setResult] = useState(null);
  const id = route.params.id;
  // console.log(navigation, '================dassssss asdsdsad')
  // console.log(id , "=============== id in result sreen")
  // console.log(result);

  const getResult = async id => {
    // console.log(id.id);
    // const response = await yelp.get('nZyCo-rCRN_dFFuQ50HJPQ');
    const response = await yelp.get(`/${id}`);
    // console.log(response.data, '------');
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }
  return (
    <View>
      {/* <Text>ResultsShowScreen</Text> */}
      <Text
        style={{
          fontSize: 19,
          fontWeight: 'bold',
          alignSelf: 'center',
          paddingVertical: 10,
          paddingHorizontal: 5,
        }}>
        {result.name}
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          alignSelf: 'center',
          paddingHorizontal: 5,
        }}>
        Country {''}({result.location.country}) State ({result.location.state})
        Address {''}({result.location.address1})
      </Text>
      {/* <Text>Rating {result.rating}</Text> */}
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => {
          return <Image style={styles.resultimage} source={{uri: item}} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  resultimage: {
    height: 180,
    width: 200,
    marginVertical: 10,
    borderRadius: 10,
    alignSelf: 'center',
    flexDirection: 'row',
  },
});

export default ResultsShowScreen;
