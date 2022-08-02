import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//////////////////////////////////////////////////// Notes on Map
console.log("**Map Method**");

const nums = [1,2,3,4,5];
const squared = nums.map(function(item) {
    return item * item
});

const names = ["alice", "bob", "charlie", "danielle"]
const uppercase = names.map((name) => {
  return name[0].toUpperCase() + name.slice(1);
});

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
const elements = pokemon.map(mon => {
return `<p>${mon}</p>`
});

// console.log(squared);
// console.log(uppercase);
// console.log(elements);
///////////////////////////////////////////////////////////////////

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
