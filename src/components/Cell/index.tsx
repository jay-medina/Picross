import React from 'react';
import './index.css';
import { CellState } from './cellStateTransformer';

export interface CellProps {
  state?: CellState;
  row: number;
  column: number;
  totalRows: number;
  totalColumns: number;
  onClick: (row: number, column: number) => void;
}

class Cell extends React.PureComponent<CellProps, {}> {
  constructor(props: CellProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  render() {
    return (
      <div className={this.getClassName()} onClick={this.onClick}>
        {this.getChildElement()}
      </div>
    );
  }

  private getClassName() {
    return `cell ${this.borderColumnCell()} ${this.borderRowCell()}`;
  }

  private borderColumnCell() {
    const { column, totalColumns } = this.props;
    if (column < 4 || totalColumns < 6) 
      return '';

    if ((column + 1) % 5 === 0) {
      return 'border-cell-right';
    } 
    
    if (column % 5 === 0) {
      return 'border-cell-left';
    }
    return '';
  }

  private borderRowCell() {
    const { row, totalRows } = this.props;
    if (row < 4 || totalRows < 6) 
      return '';

    if ((row + 1) % 5 === 0) {
      return 'border-cell-bottom';
    } 
    
    if (row % 5 === 0) {
      return 'border-cell-top';
    }
    return '';
  }

  private getChildElement() {
    const { state } = this.props;
    switch (state) {
      case 'crossed': return <span className="cross">&times;</span>;
      case 'selected': return <div className="selected" />;
      default: return null;
    }
  }
  private onClick() {
    this.props.onClick(this.props.row, this.props.column);
  }
}

export default Cell;
