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
      onCloseModal,
      onAdd,
      isLoading
    } = this.props;

    return (
      <Modal show={isOpen} onHide={() => onCloseModal()}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onAdd}>
            {
              isLoading ?
                <img src="img/ring-alt.svg" height="15" alt="loader" /> :
              'ADD'
            }
          </Button>
          <Button onClick={() => onCloseModal()}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

ModalContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onCloseModal: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

ModalContainer.defaultProps = {
  isOpen: false,
};

const mapStateToProps = state => ({
  isOpen: state.modal.isOpen,
  isLoading: state.modal.isLoading,
});

export default connect(mapStateToProps, {
  onOpenModal: openModal,
  onCloseModal: closeModal,
})(ModalContainer);
