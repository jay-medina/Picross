import React from 'react';

export interface BoardHintCellProps {
  hint: number;
}

const BoardHintCell: React.StatelessComponent<BoardHintCellProps> = ({ hint }) => (
  <div className="cell hint">
    {hint}
  </div>
);

export default BoardHintCell;
