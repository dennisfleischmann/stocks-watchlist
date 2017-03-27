import React from 'react';

import StockListModal from '../atoms/stockListModal';

import {
  Button,
} from 'react-bootstrap';

import InputBox from '../atoms/inputBox';

const ModalShow = (
  <StockListModal
    showModal={true}
    inputBox={<InputBox />}
    onAdd={() => alert('on add')}
    onCloseModal={() => alert('close Modal')}
  >
    <Button onClick={() => alert('open Modal')}>Text</Button>
  </StockListModal>
);

const ModalHide = (
  <StockListModal
    showModal={false}
    inputBox={<InputBox />}
    onAdd={() => alert('on add')}
    onCloseModal={() => alert('close Modal')}
  >
    <Button onClick={() => alert('open Modal')}>Text</Button>
  </StockListModal>
);

export {
  ModalShow,
  ModalHide,
};
