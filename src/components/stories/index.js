/*
INFO:

1.)You can use storybook as some kind of documentation. As here you can see how the components
are used and furthemore you should see all possible variantions which are possible with the react
components.

2.) You can also see the the parameter which are needed for using the comonents
 */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

/*
import React Components for styling purposes without
business/application logic
*/

import {
  basicLayoutStockListTable,
  layoutStockListTableWithHeader,
  layoutStockListTableWithHeaderAndSidebar,
} from './storyOfStockListTable';


storiesOf('Stocklist Table', module)
  .add('Basic Layout', () => (
    basicLayoutStockListTable
  )).add('Layout with Header', () => (
    layoutStockListTableWithHeader
  ))
  .add('Layout with Header and Sidebar', () => (
    layoutStockListTableWithHeaderAndSidebar
  ));
