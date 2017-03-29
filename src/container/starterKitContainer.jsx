import React, { Component } from 'react';
import { connect } from 'react-redux';
import StarterKit from '../components/starterKit';
import { changeButtonMsg, changeInputText } from '../actions/startKitActions';

class StarterKitContainer extends Component {
  render() {
    const {
      changeButtnMsgDispatch,
      changeInputTextDispatch,
      msg,
      inputText,
    } = this.props;

    return (
      <StarterKit
        onChange={event => changeInputTextDispatch(event.target.value)}
        onClick={() => { changeButtnMsgDispatch(inputText); }}
        msg={msg}
        inputText={inputText}
      />
    );
  }
}

const mapStateToProps = (state) => ({ msg: state.msg, inputText: state.inputText });

const mapDispatchToProps = (dispatch) => {
  return {
    changeButtnMsgDispatch: msg => { dispatch(changeButtonMsg(msg)); },
    changeInputTextDispatch: text => { dispatch(changeInputText(text)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarterKitContainer);
