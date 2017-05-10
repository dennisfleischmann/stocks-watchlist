import axios from 'axios';

export default ({ code }) => axios.get(encodeURI(`https://graphql-stock-api.herokuapp.com/graphql?query={ stock(Symbol: "${code}") { Symbol CompanyName Price Diff } }`))
  .then(function(response) {
    return response.data;
  });
