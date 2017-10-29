import React from 'react';
import Cell, { CellProps } from '../Cell';
import './index.css';

export interface BoardProps {
  rows: number;
  columns: number;
}

class Board extends React.PureComponent<BoardProps, {}> {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }
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
      <div className="row">
        {this.createCellArray(columns, rowIndex)}
      </div>
    );
  }

  private createCellArray(columns: number, rowIndex: number) {
    const cells: React.ReactElement<CellProps>[] = [];

    for (let index = 0; index < columns; index += 1) {
      cells.push(<Cell key={`${rowIndex} - ${index}`} onClick={this.onClick} />);
    }

    return cells;
  }

  private onClick() {
    alert('cell clicked');
  }
}

export default Board;
