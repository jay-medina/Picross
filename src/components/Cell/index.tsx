import React from 'react';
import './index.css';

export type CellState = 'selected' | 'crossed';

export interface CellProps {
  state?: CellState;
  onClick: () => void;
}

function getChildElement(state?: CellState) {
  switch (state) {
    case 'crossed': return <div className="cross">&times;</div>;
    case 'selected': return <div className="selected" />;
    default: return null;
  }
}

const Cell: React.StatelessComponent<CellProps> = ({ state, onClick }) => (
  <div className="cell" onClick={onClick}>
    {getChildElement(state)}
  </div>
);

export default Cell;
