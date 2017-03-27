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

import StarterKit from '../starterKit';
import InputBox from '../atoms/inputBox';

import {
  basicLayoutStockListTable,
  layoutStockListTableWithHeader,
  layoutStockListTableWithHeaderAndSidebar,
} from './storyOfStockListTable';

import {
  ModalShow,
  ModalHide,
} from './storyOfModal';

storiesOf('Inputbox', module)
  .add('Basic Layout', () => (
    <InputBox placeholder="Type text in here" />
  ));

storiesOf('StarterKit Component', module)
  .add('Basic Layout', () => (
    <StarterKit />
  ));

storiesOf('Stocklist Table', module)
  .add('Basic Layout', () => (
    basicLayoutStockListTable
  ))
  .add('Layout with Header', () => (
    layoutStockListTableWithHeader
  ))
  .add('Layout with Header and Sidebar', () => (
    layoutStockListTableWithHeaderAndSidebar
  ));

storiesOf('Modals', module)
  .add('Show Modal', () => (
    ModalShow
  ))
  .add('Hide Modal', () => (
    ModalHide
  ));
