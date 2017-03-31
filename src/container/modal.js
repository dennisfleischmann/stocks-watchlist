import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators }  from 'redux';

import {
  Modal,
  Button,
} from 'react-bootstrap';

import { openModal, closeModal } from '../actions/modal/actionCreators';

class ModalContainer extends React.Component {
  render() {

    const {
      title,
      isOpen,
      children,
      closeModal,
      onAdd,
    } = this.props;

    return (
        <Modal show={isOpen} onHide={() => closeModal()}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {children}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onAdd}>Add</Button>
            <Button onClick={() => closeModal()}>Cancel</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

const mapStateToProps = state => {
  console.log("modal.state.mapStateToProps",state);
  return {
    isOpen: state.modal.isOpen,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      openModal: () => dispatch(openModal()),
      closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
