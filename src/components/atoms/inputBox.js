import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';


class InputBox extends Component {

  render() {
    const {
       label,
    ...otherProps
    } = this.props;

    return (
      <FormGroup>
        {
          label &&
          <ControlLabel>{label}</ControlLabel>
        }
        <FormControl
          type="text"
          {...otherProps}
        />
      </FormGroup>
    );
  }
}

InputBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

InputBox.defaultProps = {
  placeholder: 'Your placeholder',
  label: undefined,
};

export default InputBox;
