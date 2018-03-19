import React, { Component } from 'react';
import Articles from './containers/articlesContainer';
import { Provider } from 'react-redux';
import { store } from './store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <nav className="navbar navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand" href="">Navbar</a>
            </div>
          </nav>
          <Articles></Articles>
        </div>
      </Provider>
    );
  }
}

export default App;
