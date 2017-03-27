import React, { PropTypes } from 'react';

import {
  Row,
  Col,
  Button,
  Glyphicon,
} from 'react-bootstrap';

const StockListTableHeader = (props) => {

  const {
    onAdd,
    onRefresh,
    Modal,
  } = props;

  return (
    <Row>
      <Col xs={12} md={10}></Col>
      <Col xs={12} md={2}>
        <Modal>
          <Button onClick={onAdd}><Glyphicon glyph="plus-sign" /></Button>
        </Modal>
        <Button onClick={onRefresh}><Glyphicon glyph="refresh" /></Button>
      </Col>
    </Row>
  );
};

StockListTableHeader.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
};

export default StockListTableHeader;
