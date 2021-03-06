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
  } = props;

  return (
    <Row>
      <Col xs={12} md={10} />
      <Col xs={12} md={2}>
        <Button onClick={onAdd}><Glyphicon glyph="plus-sign" /></Button>
      </Col>
    </Row>
  );
};

StockListTableHeader.defaultProps = {
  Modal: null,
};

StockListTableHeader.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default StockListTableHeader;
