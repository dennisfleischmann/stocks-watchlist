import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';

import modalReducer from './modal';
import * as types from '../actions/modal/actionTypes';

describe('modal', () => {
  let initialState = {};

  beforeEach(() => {
    initialState = {
      isOpen: false,
      isLoading: false,
    };
  });

  it('should return inital state', () => {
    const newState = modalReducer();
    expect(newState).to.deep.equal(initialState);
  });

  it('should return initalState ref when type is not matching', () => {
    const newState = modalReducer(initialState);
    expect(newState).to.equal(initialState);
  });

  it('should change modal state to open', () => {
    const newState = modalReducer(initialState, { type: types.OPEN_MOAL });
    expect(newState.isOpen).to.equal(true);
  });

  it('should start loading', () => {
    const newState = modalReducer(initialState, { type: types.CHANGE_LOADING, isLoading: true });
    expect(newState.isLoading).to.equal(true);
  });

  it('should stop loading', () => {
    const firstState = modalReducer(initialState, { type: types.CHANGE_LOADING, isLoading: true });
    const secondState = modalReducer(firstState, { type: types.CHANGE_LOADING, isLoading: false });
    expect(secondState.isLoading).to.equal(false);
  });
});
