import React from 'react';
import ReactUtils from 'react-addons-test-utils';
import { describe, beforeEach, it } from 'mocha';
import { expect } from 'chai';
import InputBox from './inputBox';


describe('InputBox', () => {
  let component;
  let renderer;

  beforeEach(() => {
    renderer = ReactUtils.createRenderer();
  });

  it('should render', () => {
    renderer.render(<InputBox inputText="" value="" onChange={() => ('')} />);
    component = renderer.getRenderOutput();

    expect(component).to.not.be.undefined;
  });

  it('should show label if defined', () => {
    const input = <InputBox value="value" label="label" onChange={() => ('onChange')} />;

    renderer.render(input);
    component = renderer.getRenderOutput();

    expect(component.props.children[0].props.children).equals('label');
  });
});
