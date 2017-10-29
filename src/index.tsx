import React from 'react';
import ReactDOM from 'react-dom';
import '../config/polyfills';
import Cell from './components/Cell';

const mainContainer = document.querySelector('#main-container');

ReactDOM.render(<Cell /> , mainContainer);

const temp = new Map();

temp.set('hello', 'goodbye');

console.log(temp.get('hello'));
