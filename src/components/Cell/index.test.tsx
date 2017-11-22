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

  describe('when its a 5x5', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Cell row={4} column={4} onClick={onClick} totalColumns={5} totalRows={5} />,
      );
    });

    it('displays only with cell classname', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when its a 6x6', () => {
    describe('when its the last cell', () => {
      beforeEach(() => {
        wrapper = shallow(
          <Cell row={5} column={5} onClick={onClick} totalColumns={6} totalRows={6} />,
        );
      });

      it('adds the border cells', () => {
        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('when its the second to last cell', () => {
      beforeEach(() => {
        wrapper = shallow(
          <Cell row={4} column={4} onClick={onClick} totalColumns={6} totalRows={6} />,
        );
      });

      it('adds the border cells', () => {
        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe('when its a 7x7', () => {
    describe('when its the any other cell', () => {
      beforeEach(() => {
        wrapper = shallow(
          <Cell row={6} column={6} onClick={onClick} totalColumns={7} totalRows={7} />,
        );
      });

      it('only has the cell name', () => {
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
