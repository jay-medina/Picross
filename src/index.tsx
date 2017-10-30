import React from 'react';
import ReactDOM from 'react-dom';
import '../config/polyfills';
import Board from './components/Board/BoardContainer';

const mainContainer = document.querySelector('#main-container');

function render() {
  ReactDOM.render(<Board rows={5} columns={5} /> , mainContainer);
}

render();
