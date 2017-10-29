import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Cell from '.';

describe('Cell', () => {
  let onClick: jest.Mock<{}>;
  let wrapper: ShallowWrapper;

  describe('by default', () => {
    beforeEach(() => {
      onClick = jest.fn();
      wrapper = shallow(
        <Cell onClick={onClick}/>,
      );
    });

    it('should have className cell', () => {
      expect(wrapper.hasClass('cell')).toBe(true);
    });
  });

  describe('selected', () => {
    beforeEach(() => {
      onClick = jest.fn();
      wrapper = shallow(
        <Cell state="selected" onClick={onClick}/>,
      );
    });

    it('should select the cell', () => {
      expect(wrapper.find('.selected').length).toBe(1);
    });
  });

  describe('crossed', () => {
    beforeEach(() => {
      onClick = jest.fn();
      wrapper = shallow(
        <Cell state="crossed" onClick={onClick}/>,
      );
    });
    it('should cross out the cell', () => {
      expect(wrapper.find('.cross').length).toBe(1);
    });
  });

  describe('when clicked', () => {
    beforeEach(() => {
      onClick = jest.fn();
      wrapper = shallow(
        <Cell state="crossed" onClick={onClick}/>,
      );
      wrapper.simulate('click');
    });

    it('should invoke the onClick call back', () => {
      expect(onClick).toHaveBeenCalled();
    });
  });
});
