import React from 'react';
import PropTypes from 'prop-types';

import {
  Row,
  Col,
} from 'react-bootstrap';

const PageContainer = ({
    sidebar,
    children,
}) => (
  <Row>
    <Col xs={sidebar ? 9 : 12} md={sidebar ? 9 : 12}>
      {children}
    </Col>
    <Col xs={sidebar ? 3 : 0} md={sidebar ? 3 : 0}>
      <sidebar />
    </Col>
  </Row>
);

PageContainer.propTypes = {
  sidebar: PropTypes.object,
  children: PropTypes.node,
};

PageContainer.defaultProps = {
  sidebar: null,
  children: [],
};

export default PageContainer;
