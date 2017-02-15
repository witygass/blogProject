import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.jsx';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    React.createElement(Home),
    document.getElementById('app')
  );
});
