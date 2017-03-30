import React, { PropTypes } from 'react';

import {
  Row,
  Col,
  Button,
  Glyphicon,
} from 'react-bootstrap';


import Modal from '../atoms/stockListModal';

const StockListTableHeader = (props) => {

  const {
    onAdd,
    onRefresh,
    onCloseModal,
    onAddModal,
  } = props;

  return (
    <Row>
      <Col xs={12} md={10} />
      <Col xs={12} md={2}>
        <Modal
          showModal={false}
          onCloseModal={onCloseModal}
          onAddModal={onAddModal}
        >
          <Button onClick={onAdd}><Glyphicon glyph="plus-sign" /></Button>
          <Button onClick={onRefresh}><Glyphicon glyph="refresh" /></Button>
        </Modal>
      </Col>
    </Row>
  );
};

StockListTableHeader.defaultProps = {
  Modal: null,
};

StockListTableHeader.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onAddModal: PropTypes.func.isRequired,
};

export default StockListTableHeader;
