import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import './ErrorModal.scss';

import Backdrop from './Backdrop/Backdrop';

import * as actions from '../../../store/actions/index';

class Modal extends Component {
  render() {
    const { isModalOpen, errorMessage, closeErrorModal } = this.props;

    return (
      <>
        <Backdrop isModalOpen={isModalOpen} close={closeErrorModal} />
        <CSSTransition
          in={isModalOpen}
          timeout={500}
          classNames="modal"
          unmountOnExit
        >
          <div className="modal">
            <button onClick={closeErrorModal} className="button"><span className="close" aria-hidden="true">x</span><span className="accessible">Close Modal</span></button>
            <div className="modal__content">
              <h2>Error</h2>
              <div>{errorMessage}</div>
            </div>
          </div>
        </CSSTransition>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.modal.isModalOpen,
    errorMessage: state.modal.errorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeErrorModal: () => dispatch(actions.closeErrorModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
