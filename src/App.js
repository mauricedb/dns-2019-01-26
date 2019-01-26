import React, { Component, StrictMode, Fragment } from 'react';
import './App.css';

import Footer from './components/Footer';
import Counter from './components/Counter';
import Clock from './components/Clock';
import Movies from './components/Movies';

class App extends Component {
  render() {
    return (
      <StrictMode>
        <header>
          <h2>Top Rated Movies</h2>
        </header>
        <Counter />
        {/* <Clock /> */}
        {/* <Movies /> */}
        <Footer />
      </StrictMode>
    );
  }
}

export default App;
