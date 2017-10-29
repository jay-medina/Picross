import React from 'react';
import { CellState } from '../Cell';
import Board, { CellStates } from './index';

export interface BoardContainerProps {
  rows: number;
  columns: number;
}


export interface BoardContainerState {
  cellStates: CellStates;
}

class BoardContainer extends React.PureComponent<BoardContainerProps, BoardContainerState> {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.state = {
      cellStates: {},
    };
  }

  render() {
    return <Board 
      {...this.props} 
      onClick={this.onClick}
      cellStates={this.state.cellStates}
    />;
  }

  private onClick(row: number, column: number) {
    const key = `${row} - ${column}`;

    const newCellStates = {
      ...this.state.cellStates,
      [key]: this.toggleStates(
        this.state.cellStates[key],
      ),
    };

    this.setState({
      cellStates: newCellStates,
    });
  }

  private toggleStates(state?: CellState) {
    switch (state) {
      case CellState.Selected: return CellState.Crossed;
      case CellState.Crossed: return undefined;
      default: return CellState.Selected;
    }
  }

}

export default BoardContainer;
