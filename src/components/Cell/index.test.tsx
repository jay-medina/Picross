import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Cell from '.';

describe('Cell', () => {
  let wrapper: ShallowWrapper;

  describe('by default', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Cell />,
      );
    });

    it('should have className cell', () => {
      expect(wrapper.hasClass('cell')).toBe(true);
    });
  });

  describe('selected', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Cell state="selected" />,
      );
    });

    it('should select the cell', () => {
      expect(wrapper.find('.selected').length).toBe(1);
    });
  });

  describe('crossed', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Cell state="crossed" />,
      );
    });
    it('should cross out the cell', () => {
      expect(wrapper.find('.cross').length).toBe(1);
    });
  });
});
