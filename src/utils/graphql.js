import axios from 'axios';

/**
* transform utf8 array to string
* @param {object} stock code
* @return {object} graphQL reponse
*/
export default ({ code }) => axios.get(encodeURI(`https://graphql-stock-api.herokuapp.com/graphql?query={ stock(Symbol: "${code}") { Symbol CompanyName Price Diff } }`))
  .then(response => response.data);
