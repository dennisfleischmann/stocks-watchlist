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
      onAdd,
      inputBox,
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
            <Button onClick={onAdd}>Add</Button>
            <Button onClick={onCloseModal}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

StockListModal.propTypes = {
  children: PropTypes.arrayOf(React).isRequired,
  showModal: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  inputBox: PropTypes.instanceOf(React).isRequired,
};

export default StockListModal;

