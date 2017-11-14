import '../config/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/BoardContainer';
import './main.css';

const mainContainer = document.querySelector('#main-container');

const rowHints = [
  [1],
  [2],
  [3],
  [4],
  [5],
  [6],
];

const colHints = [
  [5],
  [4],
  [3],
  [2],
  [1],
  [2],
];

function render() {
  ReactDOM.render(
    <Board rows={6} columns={6} rowHints={rowHints} columnHints={colHints} />, mainContainer);
}

render();
