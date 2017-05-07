import React, { PropTypes } from 'react';
import {
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';

const InputBox = ({
    label,
    ...otherProps
}) =>
  (<form>
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
  </form>
  );

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
