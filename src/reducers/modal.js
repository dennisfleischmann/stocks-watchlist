import {
  OPEN_MOAL,
  CLOSE_MODAL,
  CHANGE_LOADING,
} from '../actions/modal/actionTypes';

export default function (state = { isOpen: false, isLoading: false }, action = {}) {
  switch (action.type) {
    case CLOSE_MODAL: {
      return Object.assign({}, state, { isOpen: false });
    }
    case OPEN_MOAL: {
      return Object.assign({}, state, { isOpen: true });
    }
    case CHANGE_LOADING: {
      return Object.assign({}, state, { isLoading: action.isLoading });
    }
    default:
      return state;
  }
}
