import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import SearchIcon from 'react-native-vector-icons/AntDesign';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View>
      <View style={styles.background}>
        <SearchIcon name="search1" style={styles.iconstyle} />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputstyle}
          placeholder="Search"
          value={term}
          onChangeText={onTermChange}
          onEndEditing={onTermSubmit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 15,
    backgroundColor: '#e5e4e2',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 15,
  },
  inputstyle: {
    fontSize: 16,
    flex: 1,
  },
  iconstyle: {
    fontSize: 27,
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginHorizontal: 10,
  },
});

export default SearchBar;
