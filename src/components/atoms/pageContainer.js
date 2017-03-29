import React from 'react';

import {
  Row,
  Col,
} from 'react-bootstrap';

const PageContainer = (props) => {

  const {
    sidebar,
    children,
  } = props;

  return (
    <Row>
      <Col xs={sidebar ? 9 : 12} md={sidebar ? 9 : 12}>
        {children}
      </Col>
      <Col xs={sidebar ? 3 : 0} md={sidebar ? 3 : 0}>
        <sidebar />
      </Col>
    </Row>
  );
};

export default PageContainer;
