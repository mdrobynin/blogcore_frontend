import React, { Component } from 'react';
import { Counter } from './counter/Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'

import './App.css';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <nav className="navbar navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand" href="#">Navbar</a>
            </div>
          </nav>
          <Counter></Counter>
        </div>
      </Provider>
    );
  }
}

export default App;
