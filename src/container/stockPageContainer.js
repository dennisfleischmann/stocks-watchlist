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
      openModalAction,
      closeModalAction,
      text,
      changeInputTextAction,
      addStockAction,
      removeStockAction,
      stockFoundAction,
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
            onAdd={() => openModalAction()}
          />
          <StocklistTable>
            {
              stocklist.map((stock, index) =>
                <StocklistTableRow
                  index={index}
                  key={uuidV1()}
                  {...stock}
                >
                  <Button icon="trash" onClick={() => removeStockAction(index)}></Button>
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
                  addStockAction(data);
                  closeModalAction();
                  changeInputTextAction('');
                } else {
                  stockFoundAction(false);
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
              !found && stockFoundAction(true);
              changeInputTextAction(event.target.value);
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
  openModalAction: PropTypes.func.isRequired,
  closeModalAction: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  found: PropTypes.bool.isRequired,
  changeInputTextAction: PropTypes.func.isRequired,
  addStockAction: PropTypes.func.isRequired,
  removeStockAction: PropTypes.func.isRequired,
  stockFoundAction: PropTypes.func.isRequired,
  stocklist: PropTypes.any,
};

StockPageContainer.defaultProps = {
  stocklist: [],
};

const mapDispatchToProps = dispatch => ({
  openModalAction: () => dispatch(openModal()),
  closeModalAction: () => dispatch(closeModal()),
  changeInputTextAction: text => dispatch(changeInputText(text)),
  addStockAction: data => dispatch(addStock(data)),
  removeStockAction: index => dispatch(removeStock(index)),
  stockFoundAction: isValid => dispatch(stockFound(isValid)),
});

const mapStateToProps = state => ({
  text: state.stock.text,
  found: state.stock.found,
  stocklist: state.stock.stocklist,
});

export default connect(mapStateToProps, mapDispatchToProps)(StockPageContainer);
