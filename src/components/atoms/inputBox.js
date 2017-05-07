import React, { PropTypes } from 'react';
import {
  FormGroup,
  FormControl,
} from 'react-bootstrap';

const InputBox = (props) => {

  return (<form>
    <FormGroup>
      <FormControl
        type="text"
        {...props}
      />
    </FormGroup>
  </form>);
};

InputBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

InputBox.defaultProps = {
  placeholder: 'Your placeholder',
};

export default InputBox;
