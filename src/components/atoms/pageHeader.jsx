import React from 'react';

import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';

const PageHeader = (props) => {

  const {
    children,
    title,
    body,
  } = props;

  return (
    <Row>
      <Col xs={12} ms={12}>
        <ListGroup>
          <ListGroupItem header={title}>{body}</ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
  );
};

export default PageHeader;
