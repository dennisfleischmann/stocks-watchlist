import React from 'react';
import { connect } from 'react-redux';

import {
  Page,
  PageContainer,
  PageHeader,
  StockListTableHeader,
  StocklistTable,
  StocklistTableRow,
} from '../components/atoms';

import { openModal, closeModal } from '../actions/modal/actionCreators';
import { changeInputText, fetchStockData } from '../actions/stock/actionCreators';
import Modal from './modal';

class StockPageContainer extends React.Component {

  render() {
    const {
      openModalAction,
      closeModalAction,
      text,
      changeInputTextAction,
      fetchStockDataAction,
      stocklist
    } = this.props;

    return (
      <Page>
        <PageHeader title={'Stocks Watchlist - ' + stocklist.length.toString()} />
        <PageContainer>
          <StockListTableHeader
            onAdd={() => openModalAction()}
          />
          <StocklistTable>
            {
              stocklist.map((stock, index) =>
                <StocklistTableRow
                  index={index}
                  key={stock.code+index}
                  {...stock}
               />)
             }
           </StocklistTable>
        </PageContainer>
        <Modal
          onAdd={() => { fetchStockDataAction(text); closeModalAction(); }}
          title={'New Stock to Watchlist'}
        >
          <input
            value={text}
            onChange={event => changeInputText(event.target.value)}
          />
        </Modal>
      </Page>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModalAction: () => dispatch(openModal()),
    closeModalAction: () => dispatch(closeModal()),
    changeInputTextAction: text => dispatch(changeInputText(text)),
    fetchStockDataAction: code => dispatch(fetchStockData(code)),
  };
};

const mapStateToProps = (state) => {
  return {
    text: state.stock.text,
    stocklist: state.stock.stocklist,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StockPageContainer);
