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

const hints = [
  [1, 2, 3],
  [0],
  [4, 5, 6],
  [1, 1],
  [0],
];

class Board extends React.PureComponent<BoardProps, {}> {
  render() {
    return (
      <div>
        <div className="columns">
          {this.createColumns()}
        </div>
        {this.createRows()}
      </div>
    );
  }
  private createColumns() {
    return Range(0, this.props.columns).map(
      (value: number, key: number) =>
        <BoardHints direction="column" key={key} hints={hints[value]} />,
    ).toArray();
  }

  private createRows() {
    const { rows } = this.props;

    return Range(0, rows).map(
      (value: number) => this.createRow(value),
    ).toArray();
  }

  private createRow(rowIndex: number) {
    const { columns } = this.props;
    return (
      <div key={rowIndex} className="row">
        <BoardHints direction="row" hints={hints[rowIndex]} />
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
    }).toArray();
  }
}

export default Board;
