import React, { PropTypes } from 'react';
import classNames from 'classnames';

import {
  Glyphicon,
} from 'react-bootstrap';

const StockListTableRow = (props) => {
  const {
    code,
    price,
    currency,
    exchange,
    diff,
    index,
    children,
  } = props;

  return (
    <tr className={classNames({ danger: diff < 0, success: diff > 0 })}>
      <td>{index + 1}</td>
      <td>{code}</td>
      <td>{currency} {price}</td>
      <td>{exchange}</td>
      <td>{diff}</td>
      <td>
        <Glyphicon glyph={diff > 0 ? 'chevron-up' : 'chevron-down'} />
      </td>
      <td>
        {children}
      </td>
    </tr>
  );
};

StockListTableRow.propTypes = {
  code: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
  exchange: PropTypes.string,
  diff: PropTypes.string,
  index: PropTypes.number,
  children: PropTypes.node,
};

StockListTableRow.defaultProps = {
  code: '',
  price: 0,
  currency: '',
  exchange: '',
  diff: '',
  index: 0,
  children: null,
};


export default StockListTableRow;
