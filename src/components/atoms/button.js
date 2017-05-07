import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Glyphicon,
} from 'react-bootstrap';

const button = (props) => {
  const {
    icon,
    children,
    ...otherProps
  } = props;

  return (
    <Button {...otherProps}>
      {
        icon &&
        <Glyphicon glyph={icon} />
      }
      {children}
    </Button>
  );
};

button.propTypes = {
  icon: PropTypes.any,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

button.defaultProps = {
  icon: '',
  children: null,
};

export default button;
