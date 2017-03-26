import React, { PropTypes } from 'react';
import {
  FormGroup,
  FormControl,
} from 'react-bootstrap';

const InputBox = (props) => {
  const {
    inputText,
    onChange,
  } = props;

  return (<form>
    <FormGroup>
      <FormControl
        type="text"
        value={inputText}
        onChange={onChange}
      />
    </FormGroup>
  </form>);
};

InputBox.propTypes = {
  inputText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default InputBox;


