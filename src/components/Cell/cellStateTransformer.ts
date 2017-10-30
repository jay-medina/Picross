export enum CellState {
  Selected = 'selected',
  Crossed =  'crossed',
}

export interface CellStates {
  [key: string]: (CellState | undefined);
}


export function updateState(oldState: CellStates, row: number, column: number) {
  const key = createKey(row, column);
  const state = getState(oldState, key);

  return {
    ...oldState,
    [key]: toggleState(
      state,
      row,
      column,
    ),
  };
}

export function getState(state: CellStates, key: string) {
  return state[key];
}

export function createKey(row: number, column: number) {
  return `${row} - ${column}`;
}

function toggleState(state: CellState | undefined, row: number, column: number) {
  switch (state) {
    case CellState.Selected: return CellState.Crossed;
    case CellState.Crossed: return undefined;
    default: return CellState.Selected;
  }
}
