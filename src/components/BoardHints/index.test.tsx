import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import BoardHints from './index';

describe('<BoardHints />', () => {
  let wrapper: ShallowWrapper;

  describe('when rendering a row of board hints', () => {
    beforeEach(() => {
      wrapper = shallow(
        <BoardHints direction="row" hints={[1, 2, 3]} />,
      );

    });

    it('renders the cells', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
