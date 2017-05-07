import React from 'react';
import PropTypes from 'prop-types';

import {
  Table,
} from 'react-bootstrap';

const StockLisTable = ({ children }) => (
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

StockLisTable.propTypes = {
  children: PropTypes.node,
};

StockLisTable.defaultProps = {
  children: [],
};

export default StockLisTable;
