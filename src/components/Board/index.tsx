import React from 'react';
import Cell, { CellProps, CellState } from '../Cell';
import './index.css';

export interface BoardProps {
  rows: number;
  columns: number;
  onClick: (row: number, column: number) => void;
  cellStates: CellStates;
}

export interface CellStates {
  [key: string]: (CellState | undefined);
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

  private createCellArray(columns: number, rowIndex: number) {
    const cells: React.ReactElement<CellProps>[] = [];
    for (let index = 0; index < columns; index += 1) {
      const key = `${rowIndex} - ${index}`;
      const state = this.props.cellStates[key];
      cells.push(
        <Cell 
          key={key} 
          row={rowIndex} 
          column={index} 
          onClick={this.props.onClick}
          state={state}
        />,
      );
    }

    return cells;
  }
}

export default Board;
