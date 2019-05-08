import React, { Component } from 'react';

export default class App extends Component {
  render() {
    const { isMobile } = this.props;
    const { name }= this.props;

    return (
      <div>
        <h1>hello world {name}</h1>
      </div>
    );
  }
}


