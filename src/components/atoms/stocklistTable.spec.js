import React from 'react';
import ReactUtils from 'react-addons-test-utils';
import { describe, beforeEach, it } from 'mocha';
import { expect } from 'chai';
import StockListTable from './stocklistTable';


describe('PageHeader', () => {
  let component;
  let renderer;

  beforeEach(() => {
    renderer = ReactUtils.createRenderer();
  });

  it('should render', () => {
    renderer.render(<StockListTable />);
    component = renderer.getRenderOutput();

    expect(component).to.not.be.undefined;
  });
});
