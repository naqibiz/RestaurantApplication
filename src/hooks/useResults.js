import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    console.log('Hi there');
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('something went wrong');
    }
  };
  //   Call searchApi when Component
  // is first rendered. BAD CODE.
  //   searchApi('Pasta');
  // ==================================================
  // ==================================================
  // useEffect accepts two arguments. and The second argument is optional.
  useEffect(() => {
    searchApi('Pasta');
  }, []);

  return [searchApi, results, errorMessage];
};
