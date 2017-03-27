import React, { PropTypes } from 'react';
import classNames from 'classnames';

import {
  Glyphicon,
  Button,
} from 'react-bootstrap';

const StockListTableRow = (props) => {

  const {
    code,
    price,
    currency,
    exchange,
    diff,
    trend,
    index,
    onClick,
  } = props;

  return (
    <tr className={classNames({ danger: trend === 'down', success: trend === 'up' })}>
      <td>{index + 1}</td>
      <td>{code}</td>
      <td>{currency} {price}</td>
      <td>{exchange}</td>
      <td>{diff}</td>
      <td>
        <Glyphicon glyph={trend === 'up' ? "chevron-up" : 'chevron-down'} />
      </td>
      <td>
        <Button onClick={onClick}>
          <Glyphicon glyph="trash" />
        </Button>
      </td>
    </tr >
  );
};

StockListTableRow.propTypes = {
  code: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  exchange: PropTypes.string.isRequired,
  diff: PropTypes.number.isRequired,
  trend: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default StockListTableRow;
