import React from 'react';
import BoardHintCell from './BoardHintCell';
import './index.css';

export interface BoardHintsProps {
  direction: 'row' | 'column';
  hints: number[];
}

class BoardHints extends React.PureComponent<BoardHintsProps, {}> {
  render() {
    return (
      <div className="boardHints">
        {this.renderCells()}
      </div>
    );
  }
  private renderCells() {
    return this.props.hints.map(hint => <BoardHintCell hint={hint} />);
  }
}

export default BoardHints;
