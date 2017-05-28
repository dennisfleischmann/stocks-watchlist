import {
  CLOSE_MODAL,
  OPEN_MOAL,
  CHANGE_LOADING,
} from './actionTypes';

export const openModal = () => ({
  type: OPEN_MOAL,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const isLoading = loading => ({
  type: CHANGE_LOADING,
  isLoading: loading,
});
