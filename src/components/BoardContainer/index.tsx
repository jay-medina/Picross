import React from 'react';
import Board from '../Board';
import { CellStates, updateState } from '../Cell/cellStateTransformer';

export interface BoardContainerProps {
  rows: number;
  columns: number;
  rowHints: number[][];
  columnHints: number[][];
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
    const newCellStates = updateState(
      this.state.cellStates,
      row,
      column,
    );

    this.setState({
      cellStates: newCellStates,
    });
  }

}

export default BoardContainer;
