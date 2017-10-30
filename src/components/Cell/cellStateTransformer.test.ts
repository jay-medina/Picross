import {
  CellState,
  CellStates,
  updateState,
  createKey,
  getState,
} from './cellStateTransformer';

describe('cellStateTransformer', () => {
  let state: CellStates;

  describe('.updateState', () => {
    describe('when the state is empty', () => {
      beforeEach(() => {
        state = updateState({}, 1, 1);
      });

      it('adds the key with the stated selected', () => {
        expect(state).toEqual({
          '1 - 1': CellState.Selected,
        });
      });
    });

    describe('when the state is selected', () => {
      beforeEach(() => {
        state = updateState(
          {
            '1 - 1': CellState.Selected,
          },
          1, 1);
      });

      it('updates the state item to be crossed', () => {
        expect(state).toEqual({
          '1 - 1': CellState.Crossed,
        });
      });
    });

    describe('when the state is crossed', () => {
      beforeEach(() => {
        state = updateState(
          {
            '1 - 1': CellState.Crossed,
          },
          1, 1);
      });
      it('sets the state to be undefined', () => {
        expect(state).toEqual({
          '1 - 1': undefined,
        });
      });
    });
  });

  describe('.createKey', () => {
    it('returns a string key for row, column passed in', () => {
      expect(createKey(1, 1)).toBe(`1 - 1`);
    });
  });

  describe('.getState', () => {
    it('returns back the state from the key passed', () => {
      expect(
        getState(
          {
            '1 - 1': CellState.Selected,
          }, 
          '1 - 1',
        )).toBe(CellState.Selected);
    });
  });
});
