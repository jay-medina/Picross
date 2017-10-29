import React from 'react';
import ReactDOM from 'react-dom';
import '../config/polyfills';
import Board from './components/Board';
// import Cell, { CellState } from './components/Cell';

const mainContainer = document.querySelector('#main-container');

// const states: [ CellState | undefined ] = [undefined, 'crossed', 'selected'];

// let currentStateIndex = 0;
// let currentState = states[currentStateIndex];

// function onClick() {
//   currentStateIndex += 1;
//   if (currentStateIndex >= states.length) {
//     currentStateIndex = 0;
//   }

//   currentState = states[currentStateIndex];
//   render();
// }

function render() {
  ReactDOM.render(<Board rows={2} columns={2} /> , mainContainer);
}

render();
