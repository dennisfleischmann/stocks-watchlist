import React, { PropTypes } from 'react';
import classNames from 'classnames';

import {
  Glyphicon,
} from 'react-bootstrap';

const StockListTableRow = (props) => {
  const {
    index,
    Symbol,
    CompanyName,
    Currency,
    Diff,
    Price,
    Exchange,
    children,
  } = props;

  return (
    <tr className={classNames({ danger: Diff < 0, success: Diff > 0 })}>
      <td>{index + 1}</td>
      <td>{Symbol}-{CompanyName}</td>
      <td>{Currency} {Price}</td>
      <td>{Exchange}</td>
      <td>{Diff}</td>
      <td>
        <Glyphicon glyph={Diff > 0 ? 'chevron-up' : 'chevron-down'} />
      </td>
      <td>
        {children}
      </td>
    </tr>
  );
};

StockListTableRow.propTypes = {
  Symbol: PropTypes.string,
  Price: PropTypes.number,
  Currency: PropTypes.string,
  Exchange: PropTypes.string,
  Diff: PropTypes.number,
  CompanyName: PropTypes.string,
  index: PropTypes.number,
  children: PropTypes.node,
};

StockListTableRow.defaultProps = {
  CompanyName: '?',
  Symbol: '?',
  Price: 0,
  Currency: '',
  Exchange: '?',
  Diff: 0,
  index: 0,
  children: null,
};


export default StockListTableRow;
