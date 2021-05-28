import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>,
//   <h1>hello, world!</h1>,
//   document.getElementById('root')
// );

// const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

function formatName(user) {
  if (user) {
    return user.firstName + ' ' + user.lastName;
  }
  return <h1>Hello, Stranger.</h1>;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Helle, {formatName(user)}!
    <br></br>
    {formatName()}
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

function tick() {
  const elementTime = (
    <div>
      <h1>Hello world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  reactDom.render(elementTime, document.getElementById('root'))
}

setInterval(tick, 1000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
