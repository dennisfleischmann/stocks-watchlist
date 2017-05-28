
/**
* transform utf8 array to string
* @method exposeStockData
* @param {object} stock to map into frontend domain
* @return {object} mapped objec
*/
const exposeStockData = stock => ({
  code: stock.code,
  price: stock.dataset_data.data[0][4],
  exchange: '?',
  diff: (stock.dataset_data.data[1][4] - stock.dataset_data.data[0][4]).toFixed(2),
});

export {
  exposeStockData,
};
