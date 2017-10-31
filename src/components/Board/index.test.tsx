import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Board from './index';
import { CellState } from '../Cell/cellStateTransformer';

describe('<Board />', () => {
  let wrapper: ShallowWrapper;
  const rowHints = [] as number[][];
  const colHints = [] as number[][];

  describe('when user creates 2x2 board', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Board
          rows={2}
          columns={2}
          onClick={jest.fn()}
          cellStates={{}}
          rowHints={rowHints}
          columnHints={colHints} />,
      );
    });

    it('display the board', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when user has a selected cell', () => {
    beforeEach(() => {
      const cellStates = {
        '1 - 1': CellState.Selected,
      };
      wrapper = shallow(
        <Board
          rows={2}
          columns={2}
          onClick={jest.fn()}
          cellStates={cellStates}
          rowHints={rowHints}
          columnHints={colHints} />,
      );
    });

    it('display the board with the cell selected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when a cell is clicked', () => {
    let onClick: jest.Mock<void>;

    beforeEach(() => {
      onClick = jest.fn();

      const cellStates = {
        '1 - 1': CellState.Selected,
      };
      wrapper = shallow(
        <Board
          rows={2}
          columns={2}
          onClick={onClick}
          cellStates={cellStates}
          rowHints={rowHints}
          columnHints={colHints} />,
      );

      wrapper.find('Cell').at(1).simulate('click', 0, 1);
    });
    it('triggers the on click', () => {
      expect(onClick).toHaveBeenCalledWith(0, 1);
    });
  });
});
