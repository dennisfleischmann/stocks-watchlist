import React from 'react';
import ReactUtils from 'react-addons-test-utils';
import { describe, beforeEach, it } from 'mocha';
import { expect } from 'chai';
import Page from './page';


describe('Page', () => {
  let component;
  let renderer;

  beforeEach(() => {
    renderer = ReactUtils.createRenderer();
  });

  it('should render', () => {
    renderer.render(<Page><div>test</div></Page>);

    component = renderer.getRenderOutput();

    expect(component).to.not.be.undefined;
  });

  it('should pass children', () => {
    renderer.render(
      <Page>
        <div>test1</div>
        <div>test2</div>
      </Page>);

    component = renderer.getRenderOutput();

    expect(component.props.children[0]).to.not.be.undefined;
    expect(component.props.children[0].type).to.equals('div');
    expect(component.props.children[0].props.children).to.equals('test1');
  });
});
