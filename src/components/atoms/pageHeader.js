import React from 'react';
import PropTypes from 'prop-types';

import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';

class PageHeader extends React.Component {
  render() {
    const {
      title,
      body,
    } = this.props;

    return (
      <Row>
        <Col xs={12} md={12}>
          <ListGroup>
            <ListGroupItem header={title}>{body}</ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    );
  }
}

PageHeader.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

PageHeader.defaultProps = {
  title: '',
  body: '',
};

export default PageHeader;
