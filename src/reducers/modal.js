
import { OPEN_MOAL, CLOSE_MODAL } from '../actions/modal/actionTypes';

export default function (state = { isOpen: false }, action) {
  switch (action.type) {
    case CLOSE_MODAL: {
      return Object.assign({}, state, { isOpen: false });
    }
    case OPEN_MOAL: {
      return Object.assign({}, state, { isOpen: true });
    }
    default:
      return state;
  }
}
