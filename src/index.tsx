import '../config/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board/BoardContainer';
import './main.css';

const mainContainer = document.querySelector('#main-container');

function render() {
  ReactDOM.render(<Board rows={5} columns={5} />, mainContainer);
}

render();
