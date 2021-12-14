import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// IMPORT SCREENS
import SearchScreen from './src/screens/SearchScreen';
import SearchBar from './src/components/SearchBar';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BusinessSearch" component={SearchScreen} />
        <Stack.Screen name="SearchBar" component={SearchBar} />
        <Stack.Screen name="ResultsShowScreen" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
