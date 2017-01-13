import React, { Component } from 'react';
import Post from './Post.js';
import HeaderBar from './HeaderBar.js'

class App extends Component {
  render() {
    return (
      <div className = "App">
        <HeaderBar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
