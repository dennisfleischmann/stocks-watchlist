import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uuidV1 from 'uuid/v1';

import graphQL from '../utils/graphql';

import {
  Page,
  PageContainer,
  PageHeader,
  StockListTableHeader,
  StocklistTable,
  StocklistTableRow,
  Button,
  InputBox,
  ListGroup,
  ListGroupItem,
} from '../components/atoms';

import { openModal, closeModal, isLoading } from '../actions/modal/actionCreators';
import { changeInputText, addStock, removeStock, stockFound } from '../actions/stock/actionCreators';
import Modal from './modalContainer';

class StockPageContainer extends Component {
  render() {
    const {
      onOpenModal,
      onCloseModal,
      onChangeInputText,
      onAddStock,
      onRemoveStock,
      onStockFound,
      onLoading,
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
                  <Button icon="trash" onClick={() => onRemoveStock(index)} />
                </StocklistTableRow>
                )
            }
          </StocklistTable>
        </PageContainer>
        <Modal
          onAdd={() => {
            onLoading(true);
            graphQL({ code: text }).then(({ data }) => {
              const { stock } = data;

              if (stock) {
                onCloseModal();
                onAddStock(stock);
                onChangeInputText('');
              } else {
                onStockFound(false);
              }
              onLoading(false);
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
          {
            !found &&
            <ListGroup>
              <ListGroupItem bsStyle="danger">{`Stock with the code: ${text} was not found.`}</ListGroupItem>
            </ListGroup>
          }
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
  onLoading: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  found: PropTypes.bool.isRequired,
  stocklist: PropTypes.arrayOf(PropTypes.object),
};

StockPageContainer.defaultProps = {
  stocklist: [],
};

const mapStateToProps = state => ({
  text: state.stock.text,
  found: state.stock.found,
  stocklist: state.stock.stocklist,
});

const mapDispatchToProps = dispatch => ({
  onOpenModal: bindActionCreators(openModal, dispatch),
  onCloseModal: bindActionCreators(closeModal, dispatch),
  onChangeInputText: bindActionCreators(changeInputText, dispatch),
  onAddStock: bindActionCreators(addStock, dispatch),
  onRemoveStock: bindActionCreators(removeStock, dispatch),
  onStockFound: bindActionCreators(stockFound, dispatch),
  onLoading: bindActionCreators(isLoading, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockPageContainer);
