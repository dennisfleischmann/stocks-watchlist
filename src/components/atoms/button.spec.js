import React from 'react';
import ReactUtils from 'react-addons-test-utils';
import { describe, beforeEach, it } from 'mocha';
import { expect } from 'chai';
import Button from './button';


describe('Button', () => {
  let component;
  let renderer;

  beforeEach(() => {
    renderer = ReactUtils.createRenderer();
  });

  it('should render', () => {
    renderer.render(<Button inputText="" value="" onChange={() => ('')} />);
    component = renderer.getRenderOutput();

    expect(component).to.not.be.undefined;
  });
});
