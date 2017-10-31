import React from 'react';
import BoardHintCell from './BoardHintCell';
import './index.css';

export interface BoardHintsProps {
  direction: 'row' | 'column';
  hints: number[];
}

const getClassName = ({ direction }: BoardHintsProps) => {
  if (direction === 'column') {
    return 'boardHints column';
  }
  return 'boardHints';
};

const renderCells = ({ hints }: BoardHintsProps) =>
  hints.map((hint, key) => <BoardHintCell hint={hint} key={key} />);

const BoardHints = (props: BoardHintsProps) => (
  <div className={getClassName(props)}>
    {renderCells(props)}
  </div>
);

export default BoardHints;
