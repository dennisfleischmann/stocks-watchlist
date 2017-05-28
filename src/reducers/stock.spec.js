import { describe, beforeEach, it } from 'mocha';
import { expect } from 'chai';
import stockReducer from './stock';
import * as types from '../actions/stock/actionTypes';

describe('stock reducer', () => {
  let state = {};
  let facebookStock = {};
  let microsoftStock = {};

  beforeEach(() => {
    state = {
      text: '',
      stocklist: [],
      found: true,
    };
    facebookStock = {
      code: 'fb',
      price: 35.00,
      exchange: '?',
      diff: 1.05,
    };
    microsoftStock = {
      code: 'fb',
      price: 35.00,
      exchange: '?',
      diff: 1.05,
    };
  });

  it('should return initital state', () => {
    const initalState = stockReducer();
    console.log('initialState', initalState);
    expect(initalState).to.deep.equal({
      text: '',
      stocklist: [],
      found: true,
    });
  });

  it('should not mutate old state', () => {
    const newState = stockReducer(state, { type: types.ADD_STOCK, stock: facebookStock });
    expect(state).to.not.equal(newState);
  });

  it('should add stock to list', () => {
    const newState = stockReducer(state, { type: types.ADD_STOCK, stock: facebookStock });

    expect(newState.stocklist.length).to.equal(1);
    expect(newState.stocklist[0]).to.deep.equal(facebookStock);
  });

  it('should add stock to an existing list', () => {
    const firstState = stockReducer(state, { type: types.ADD_STOCK, stock: facebookStock });
    const secondState = stockReducer(firstState, { type: types.ADD_STOCK, microsoftStock });
    expect(secondState.stocklist.length).to.equal(2);
  });

  it('should change searchterm on userinput', () => {
    const newState = stockReducer(state, { type: types.CHANGE_INPUT_TEXT, text: 'test_user_input' });
    expect(newState.text).to.equal('test_user_input');
  });

  it('should remove stock from list', () => {
    const firstState = stockReducer(state, { type: types.ADD_STOCK, stock: facebookStock });
    const secondState = stockReducer(firstState, { type: types.ADD_STOCK, stock: microsoftStock });
    const thirdState = stockReducer(secondState, { type: types.REMOVE_STOCK, index: 0 });

    expect(thirdState.stocklist.length).to.equal(1);
  });

  it('should change stock found status if api returns valid data', () => {
    const newState = stockReducer(state, { type: types.STOCK_FOUND, found: true });

    expect(newState.found).to.be.true;
  });
});
