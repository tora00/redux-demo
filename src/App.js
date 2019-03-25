import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';

const App = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>

            <Component1/>
            <Component2/>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer">
                Learn React
            </a>
        </header>
    </div>
)

export default App;
