import React from 'react';

import {
  Grid,
} from 'react-bootstrap';

const Page = (props) => {

  const {
    children,
  } = props;

  return (
    <Grid>
      {children}
    </Grid>
  );
};

export default Page;
