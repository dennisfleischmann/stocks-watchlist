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
import { changeInputText, addStock } from '../actions/stock/actionCreators';
import Modal from './modal';

import { fetchStockData } from '../utils/quandlAPI';

class StockPageContainer extends React.Component {
  render() {
    const {
      openModalAction,
      closeModalAction,
      text,
      changeInputTextAction,
      addStockAction,
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
          onAdd={() => {
            fetchStockData({ code: text })
              .then((respose) => {
                const data = JSON.parse(respose);
                data.code = text;
                addStockAction(data);
                closeModalAction();
            });
          }
        }
          title={'New Stock to Watchlist'}
        >
          <input
            value={text}
            onChange={event => changeInputTextAction(event.target.value)}
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
    addStockAction: data => dispatch(addStock(data)),
  };
};

const mapStateToProps = (state) => {
  return {
    text: state.stock.text,
    stocklist: state.stock.stocklist,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StockPageContainer);
