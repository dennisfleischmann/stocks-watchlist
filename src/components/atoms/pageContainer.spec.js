import React from 'react';
import ReactUtils from 'react-addons-test-utils';
import { describe, beforeEach, it } from 'mocha';
import { expect } from 'chai';
import PageContainer from './pageContainer';


describe('PageContainer', () => {
  let component;
  let renderer;

  beforeEach(() => {
    renderer = ReactUtils.createRenderer();
  });

  it('should render', () => {
    renderer.render(<PageContainer><div>test</div></PageContainer>);

    component = renderer.getRenderOutput();

    expect(component).to.not.be.undefined;
  });


  it('should show sidebar', () => {
    const sidebar = (<div>sidebar</div>);
    renderer.render(
      <PageContainer sidebar={sidebar} />);

    component = renderer.getRenderOutput();

    expect(component.props.children[1].props.children.type).to.equal('sidebar');
  });
});
