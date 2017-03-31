
import { CLOSE_MODAL, OPEN_MOAL } from './actionTypes';

export const openModal = () => {
  return {
    type: OPEN_MOAL,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
