import React, { Component } from 'react';
import './App.css'; 

let defaultStyle = {
  color: "#fff"
}

class Aggregate extends Component {
  render(){
    return(
      <div className="aggregate" style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>Number and Text</h2>
      </div> 
    );
  }
}

class Filter extends Component {
  render() {
    return(
      <div>
        <input type="text" placeholder="Search Your Song" />
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return(
      <div style={{...defaultStyle, width: "25%", display: 'inline-block'}}>
        <img alt="test" />
        <h3>Playlist Name</h3>
        <ul style={{listStyleType: 'none'}}>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="textHeader">Title</h1>
        <Aggregate />
        <Aggregate />
        <Filter />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    );
  }
}

export default App;
