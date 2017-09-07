import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Cell from './Cell';

describe('Cell', () => {
  describe('render', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
      wrapper = shallow(
        <Cell />,
      );
    });

    it('should display hello world', () => {
      expect(wrapper.text()).toEqual('Hello world');
    });
  });
});
