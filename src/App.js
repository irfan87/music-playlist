import React, { Component } from 'react';
import './App.css'; 

let defaultStyle = {
  color: "#fff"
}

let fakeServerData = {
  user: {
    name: 'irfan',
    playlists: [
      {
        name: 'Favorites',
        songs: [
          {
            song_name: 'Southern Girl',
            duration: 1234
          }, {
            name: 'Zombie',
            duration: 1234
          }, {
            name: 'Wish You Were Here',
            duration: 1234
          }]
      },
      {
        name: 'Everyday Song',
        songs: [
          {
            song_name: 'Wham-bang Shang-lala',
            duration: 1234
          }, {
            name: 'Talk Show On The Mute',
            duration: 1234
          }, {
            name: 'Last Kiss',
            duration: 1234
          }]
      },
      {
        name: 'Recommended',
        songs: [
          {
            song_name: 'Harukaze',
            duration: 1234
          }, {
            name: 'Smell Like A Teen Spirit',
            duration: 1234
          }, {
            name: 'Only One',
            duration: 1234
          }]
      }
    ]
  }
}

class PlaylistCounter extends Component {
  render(){
    return(
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>{this.props.playlists.length} Playlists</h2>
      </div> 
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, each_playlist) => {
      return songs.concat(each_playlist.songs);
    }, []);

    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration;
    }, 0);
    
    return(
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>{Math.round(totalDuration/60)} Hours</h2>
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
  constructor(props) {
    super(props);

    this.state = {
      serverData: {}
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        serverData: fakeServerData
      });
    }, 500);
  }

  render() {
    return (
      <div className="App">
        {
          this.state.serverData.user ? 
          <div>
            <h1 style={{fontSize: 54, ...defaultStyle}}>
              {this.state.serverData.user.name}'s Playlist
            </h1>
            <PlaylistCounter playlists={this.state.serverData.user.playlists} />
            <HoursCounter playlists={this.state.serverData.user.playlists} />
            <Filter />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
          </div> : <h1 style={{fontSize: 54, ...defaultStyle}}>Waiting The Server To Responds..</h1>
        }
      </div>
    );
  }
}

export default App;
