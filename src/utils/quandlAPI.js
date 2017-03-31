import fetchStream from 'fetch-readablestream';

import { Utf8ArrayToStr } from './transformations';

export const fetchStockData = ({ code} ) => {
  const URL = `https://www.quandl.com/api/v3/datasets/WIKI/${code}/data.json?api_key=${'hyFyxojQfFCYfK_6tesP'}&limit=5s`;

  return fetchStream(URL)
   .then(response => readAllChunks(response.body))
   .then(chunks => {

     return Utf8ArrayToStr(chunks[0]);
   });
 }


 function readAllChunks(readableStream) {
   const reader = readableStream.getReader();
   const chunks = [];

   function pump() {
     return reader.read().then(({ value, done }) => {
       if (done) {
         return chunks;
       }
       chunks.push(value);
       return pump();
     });
   }

   return pump();
 }
