import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const myFirstElement = <h1>Ryan Carless's Coding Portfolio</h1>

// ReactDOM.render(myFirstElement, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App></App>);

