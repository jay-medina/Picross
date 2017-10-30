import React from 'react';
import Cell, { CellProps } from '../Cell';
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
    const rowOfCells: React.ReactElement<CellProps>[] = [];

    for (let index = 0; index < rows; index += 1) {
      const cells = this.createRow(index);

      rowOfCells.push(cells);
    }
    return rowOfCells;
  }

  private createRow(rowIndex: number) {
    const { columns } = this.props;
    return (
      <div key={rowIndex} className="row">
        {this.createCellArray(columns, rowIndex)}
      </div>
    );
  }

  private createCellArray(columns: number, row: number) {
    const cells: React.ReactElement<CellProps>[] = [];
    for (let col = 0; col < columns; col += 1) {
      const key = createKey(row, col);
      const state = getState(this.props.cellStates, key);
      cells.push(
        <Cell 
          key={key} 
          row={row} 
          column={col} 
          onClick={this.props.onClick}
          state={state}
        />,
      );
    }

    return cells;
  }
}

export default Board;
