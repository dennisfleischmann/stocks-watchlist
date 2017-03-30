/*
INFO:

Here you can see all possible usecases of the StockListTable
First you as a Application Developer you can start npm run storybook to have a look
on all possible react component variantions. Then you can pick the variantion you need for your
user story.

Then you can look for the correct js/jsx file to find how it can be used
 */

import React from 'react';

import StocklistTable from '../atoms/stocklistTable';
import StocklistTableRow from '../atoms/stocklistTableRow';
import Page from '../atoms/page';
import PageHeader from '../atoms/pageHeader';
import PageContainer from '../atoms/pageContainer';
import StockListTableHeader from '../atoms/stocklistTableHeader';

import { stockListMockData } from './mockData';

const basicLayoutStockListTable = (
  <StocklistTable>
    {
      stockListMockData.map((stock, index) =>
        <StocklistTableRow
          key={index}
          {...stock}
          index={index}
          onClick={() => alert('deleting stock ' + stock.code)}
        />)
    }
  </StocklistTable>
);



const layoutStockListTableWithHeader = (
  <Page>
    <PageHeader title="Stocklist Wachlist" />
    <PageContainer>
      <StockListTableHeader
        onAdd={() => alert('adding')}
        onRefresh={() => alert('fetching lastest data')}
        onCloseModal={() => console.log('close Modal')}
        onAddModal={() => console.log('add Modal')}
      />
      <StocklistTable>
        {
          stockListMockData.map((stock, index) =>
            <StocklistTableRow
              key={`${index + stock.code}`}
              {...stock}
              index={index}
              onClick={() => alert('deleting stock ' + stock.code)}
            />)
        }
      </StocklistTable>
    </PageContainer>
  </Page>
);


const layoutStockListTableWithHeaderAndSidebar = (
  <Page>
    <PageHeader title="Stocklist Wachlist" />
    <PageContainer sidebar>
      <StockListTableHeader
        onAdd={() => alert('adding')}
        onRefresh={() => alert('fetching lastest data')}
        onCloseModal={() => console.log('close Modal')}
        onAddModal={() => console.log('add Modal')}
      >
      </StockListTableHeader>
      <StocklistTable>
        {
          stockListMockData.map((stock, index) =>
            <StocklistTableRow
              key={`${index + stock.code}`}
              {...stock}
              index={index}
              onClick={() => alert('deleting stock ' + stock.code)}
            />)
        }
      </StocklistTable>
    </PageContainer>
  </Page>
);

export {
  basicLayoutStockListTable,
  layoutStockListTableWithHeader,
  layoutStockListTableWithHeaderAndSidebar,
};
