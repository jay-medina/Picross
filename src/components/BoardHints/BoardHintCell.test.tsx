import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import BoardHintCell from './BoardHintCell';

describe('<BoardHintCell />', () => {
  let wrapper: ShallowWrapper;

  describe('when the component renders', () => {
    beforeEach(() => {
      wrapper = shallow(
        <BoardHintCell hint={4} />,
      );
    });

    it('displays the hint in the cell', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });
});
