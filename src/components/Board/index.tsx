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
  rowHints: number[][];
  columnHints: number[][];
}

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
    const { columnHints } = this.props;
    return Range(0, this.props.columns).map(
      (value, key) =>
        <BoardHints direction="column" key={key} hints={columnHints[value as number]} />,
    ).toArray();
  }

  private createRows() {
    const { rows } = this.props;

    return Range(0, rows).map(
      value => this.createRow(value as number),
    ).toArray();
  }

  private createRow(rowIndex: number) {
    const { columns, rowHints } = this.props;
    return (
      <div key={rowIndex} className="row">
        <BoardHints direction="row" hints={rowHints[rowIndex]} />
        {this.createCellArray(columns, rowIndex)}
      </div>
    );
  }

  private createCellArray(columns: number, row: number) {
    return Range(0, columns).map((c) => {
      const column = c as number;
      const key = createKey(row, column);
      const state = getState(this.props.cellStates, key);
      return (
        <Cell
          key={key}
          row={row}
          column={column}
          onClick={this.props.onClick}
          state={state}
        />
      );
    }).toArray();
  }
}

export default Board;
