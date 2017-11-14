import React from 'react';
import './index.css';
import { CellState } from './cellStateTransformer';

export interface CellProps {
  state?: CellState;
  row: number;
  column: number;
  onClick: (row: number, column: number) => void;
}

class Cell extends React.PureComponent<CellProps, {}> {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }
  render() {
    return (
      <div className={`cell ${this.borderCell()}`} onClick={this.onClick}>
        {this.getChildElement()}
      </div>
    );
  }

  private borderCell() {
    const { column } = this.props;
    if (column < 4) 
      return '';

    if ((column + 1) % 5 === 0) {
      return 'border-cell-left';
    } 
    
    if (column % 5 === 0) {
      return 'border-cell-right';
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
