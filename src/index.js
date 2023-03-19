import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Page(){
  return (
    <div>
      <header>
        <nav>
          <img src='./logo192.png'  width="40px"/>
        </nav>
      </header>

      <h1>Fun facts about react</h1>
      <ol>
        <li>fact 1</li>
        <li>fact2</li>
        <li>fact3</li>
        <li>fact4</li>
      </ol>

      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Page/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
