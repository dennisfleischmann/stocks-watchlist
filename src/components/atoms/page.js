import React from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
} from 'react-bootstrap';

const Page = ({ children }) => (
  <Grid>
    {children}
  </Grid>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
