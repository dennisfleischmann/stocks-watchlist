import React, { PropTypes } from 'react';

import {
  Modal,
  Button,
} from 'react-bootstrap';

class StockListModal extends React.Component {
  render() {

    const {
      children,
      showModal,
      onCloseModal,
      onAddModal,
      inputBox,
      button,
    } = this.props;

    return (
      <div>
        {children}
        <Modal show={showModal} onHide={onCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add stock to watchlist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Company Code</h4>
            {inputBox}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onAddModal}>Add</Button>
            <Button onClick={onCloseModal}>Cancel</Button>
          </Modal.Footer>
        </Modal>
        {button}
      </div>
    );
  }
}

StockListModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onAddModal: PropTypes.func.isRequired,
};

export default StockListModal;

