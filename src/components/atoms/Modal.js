import React, { PropTypes } from 'react';

import {
  Modal,
  Button,
} from 'react-bootstrap';

class StockListModal extends React.Component {
  render() {
    const {
      title,
      children,
      showModal,
      onCloseModal,
      onAddModal,
      inputBox,
    } = this.props;

    return (
        <Modal show={showModal} onHide={onCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {children}
            <h4>Company Code</h4>
            {inputBox}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onCloseModal}>Cancel</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

StockListModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onAddModal: PropTypes.func.isRequired,
};

export default StockListModal;
