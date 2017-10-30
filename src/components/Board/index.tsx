import React from 'react';
import { Range } from 'immutable';
import Cell from '../Cell';
import BoardHints from '../BoardHints';
import { getState, createKey, CellStates } from '../Cell/cellStateTransformer';
import './index.css';

export interface BoardProps {
  rows: number;
  columns: number;
  onClick: (row: number, column: number) => void;
  cellStates: CellStates;
}

class Board extends React.PureComponent<BoardProps, {}> {
  render() {
    return (
      <div>
        {this.createRowOfCells()}
      </div>
    );
  }
  private createRowOfCells() {
    const { rows } = this.props;

    return Range(0, rows).map(
      (value: number) => this.createRow(value),
    ).toJS();
  }

  private createRow(rowIndex: number) {
    const { columns } = this.props;
    return (
      <div key={rowIndex} className="row">
        <BoardHints direction="row" hints={[1, 2, 1]} />
        {this.createCellArray(columns, rowIndex)}
      </div>
    );
  }

  private createCellArray(columns: number, row: number) {
    return Range(0, columns).map((col: number) => {
      const key = createKey(row, col);
      const state = getState(this.props.cellStates, key);
      return (
        <Cell
          key={key}
          row={row}
          column={col}
          onClick={this.props.onClick}
          state={state}
        />
      );
    }).toJS();
  }
}

export default Board;
