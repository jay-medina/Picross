jest.mock('../Cell/cellStateTransformer');

import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import BoardContainer from '.';
import { updateState, CellState } from '../Cell/cellStateTransformer';

describe('<BoardContainer />', () => {
  let wrapper: ShallowWrapper;

  describe('when the container is created', () => {
    beforeEach(() => {
      wrapper = shallow(
        <BoardContainer rows={2} columns={2} rowHints={[]} columnHints={[]} />,
      );
    });

    it('renders the board with rows and columns', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when the board is clicked', () => {
    beforeEach(() => {
      wrapper = shallow(
        <BoardContainer rows={2} columns={2} rowHints={[]} columnHints={[]} />,
      );
      (updateState as jest.Mock).mockReturnValue({
        '0 - 0': CellState.Selected,
      });
      wrapper.find('Board').simulate('click', 0, 0);
    });

    it('updates the cell state', () => {
      expect(updateState).toHaveBeenCalledWith({}, 0, 0);
    });

    it('sets the new cell state on the board container', () => {
      expect(wrapper.find('Board').prop('cellStates')).toEqual({
        '0 - 0': CellState.Selected,
      });
    });
  });
});
