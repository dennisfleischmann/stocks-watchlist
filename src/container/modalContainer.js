import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Modal,
  Button,
} from 'react-bootstrap';

import { openModal, closeModal } from '../actions/modal/actionCreators';

class ModalContainer extends Component {
  render() {

    const {
      title,
      children,
      isOpen,
      closeModalAction,
      onAdd,
    } = this.props;

    return (
      <Modal show={isOpen} onHide={() => closeModalAction()}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onAdd}>Add</Button>
          <Button onClick={() => closeModalAction()}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

ModalContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  closeModalAction: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

ModalContainer.defaultProps = {
  isOpen: false,
};

const mapStateToProps = state => ({
  isOpen: state.modal.isOpen,
});

const mapDispatchToProps = dispatch => ({
  openModalAction: () => dispatch(openModal()),
  closeModalAction: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
