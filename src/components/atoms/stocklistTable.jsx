import React, { PropTypes } from 'react';

import {
  Table,
} from 'react-bootstrap';

const StockLisTable = (props) => {

  const {
    isResponsive,
    children,
  } = props;

  return (
    <Table responsive={isResponsive || false}>
      <thead>
        <tr>
          <th>#</th>
          <th>Code</th>
          <th>Price</th>
          <th>Exchange</th>
          <th>diff</th>
          <th>Trend</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </Table>
  );
};

StockLisTable.proptypes = {
  children: PropTypes.arrayOf(React).isRequired,
};

export default StockLisTable;
