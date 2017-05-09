import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuidV1 from 'uuid/v1';

import {
  Page,
  PageContainer,
  PageHeader,
  StockListTableHeader,
  StocklistTable,
  StocklistTableRow,
  Button,
  InputBox,
} from '../components/atoms';

import { openModal, closeModal } from '../actions/modal/actionCreators';
import { changeInputText, addStock, removeStock, stockFound } from '../actions/stock/actionCreators';
import Modal from './modalContainer';
import { fetchStockData } from '../utils/quandlAPI';

class StockPageContainer extends Component {
  render() {
    const {
      onOpenModal,
      onCloseModal,
      onChangeInputText,
      onAddStock,
      onRemoveStock,
      onStockFound,
      text,
      stocklist,
      found,
    } = this.props;

    const title = `Stocks Watchlist [${stocklist.length}]`;
    const label = `Code ${!found ? `${text} not found` : ''}`;

    return (
      <Page>
        <PageHeader title={title} />
        <PageContainer>
          <StockListTableHeader
            onAdd={() => onOpenModal()}
          />
          <StocklistTable>
            {
              stocklist.map((stock, index) =>
                <StocklistTableRow
                  index={index}
                  key={uuidV1()}
                  {...stock}
                >
                  <Button icon="trash" onClick={() => onRemoveStock(index)}></Button>
                </StocklistTableRow>
                )
            }
          </StocklistTable>
        </PageContainer>
        <Modal
          onAdd={() => {
            fetchStockData({ code: text })
              .then((respose) => {
                const data = JSON.parse(respose);
                if (!data.quandl_error) {
                  onAddStock(data);
                  onCloseModal();
                  onChangeInputText('');
                } else {
                  onStockFound(false);
                }
              });
          }
        }
          title={'New Stock to Watchlist'}
        >
          <InputBox
            label={label}
            value={text}
            onChange={(event) => {
              !found && onStockFound(true);
              onChangeInputText(event.target.value);
              }
            }
            placeholder="code"
          />
          <h5>Examples</h5>
          <ul>
            <li><strong>fb</strong> for Facebook</li>
            <li><strong>msft</strong> for Microsoft</li>
          </ul>
        </Modal>
      </Page>
    );
  }
}

StockPageContainer.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onChangeInputText: PropTypes.func.isRequired,
  onAddStock: PropTypes.func.isRequired,
  onRemoveStock: PropTypes.func.isRequired,
  onStockFound: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  found: PropTypes.bool.isRequired,
  stocklist: PropTypes.any,
};

StockPageContainer.defaultProps = {
  stocklist: [],
};

const mapStateToProps = state => ({
  text: state.stock.text,
  found: state.stock.found,
  stocklist: state.stock.stocklist,
});

export default connect(mapStateToProps, {
  onOpenModal: openModal,
  onCloseModal: closeModal,
  onChangeInputText: changeInputText,
  onAddStock: addStock,
  onRemoveStock: removeStock,
  onStockFound: stockFound,
})(StockPageContainer);
