import React from 'react';

export interface BoardHintsProps {
  direction: 'row' | 'column';
  hints: number[];
}

class BoardHints extends React.PureComponent<BoardHintsProps, {}> {
  render() {
    return (
      <div>items</div>
    );
  }
}

export default BoardHints;
