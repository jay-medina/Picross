import React from 'react';
import './index.css';

interface CellProps {
  state?: 'selected' | 'crossed';
}

const Cell: React.StatelessComponent<CellProps> = ({ state }) => {
  if (state === 'crossed') {
    return (
      <div className="cell">
        <div className="cross">&times;</div>
      </div>
    );
  } else if (state === 'selected') {
    return (
      <div className="cell">
        <div className="selected" />
      </div>
    );
  }

  return <div className="cell" />;
};

export default Cell;
