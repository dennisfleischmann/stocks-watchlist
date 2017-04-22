import React from 'react';
import ReactUtils from 'react-addons-test-utils';
import InputBox from './inputBox';

describe('InputBox', () => {
  let compoment;

  beforeEach(() => {
    const renderer = ReactUtils.createRenderer();
    renderer.render(<InputBox inputText="" onChange={() => ('')} />);
    compoment = renderer.getRenderOutput();
  });

  it('exist', () => {
    expect(compoment).toBeTruthy();
  })
})
