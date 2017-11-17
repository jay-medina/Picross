import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Cell from '.';
import { CellState } from './cellStateTransformer';

describe('Cell', () => {
  let onClick: jest.Mock<{}>;
  let wrapper: ShallowWrapper;

  describe('by default', () => {
    beforeEach(() => {
      onClick = jest.fn();
      wrapper = shallow(
        <Cell row={0} column={0} onClick={onClick} totalColumns={1} totalRows={1} />,
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
        <Cell row={0} 
          column={0} 
          state={CellState.Selected} 
          onClick={onClick} totalColumns={1} totalRows={1} />,
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
        <Cell row={0} column={0} 
          state={CellState.Crossed} onClick={onClick} totalColumns={1} totalRows={1} />,
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
        <Cell row={0} column={0}
          state={CellState.Crossed} onClick={onClick} totalColumns={1} totalRows={1} />,
      );
      wrapper.simulate('click');
    });

    it('should invoke the onClick call back', () => {
      expect(onClick).toHaveBeenCalled();
    });
  });
});
