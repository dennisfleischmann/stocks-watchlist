import React, { PropTypes } from 'react';

import {
  Table,
} from 'react-bootstrap';

const StockLisTable = (props) => {

  const {
    children,
  } = props;

  return (
    <Table>
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
  children: React.PropTypes.node.isRequired,
};

export default StockLisTable;
