import React from 'react'
import Header from './components/Header';
import Songs from './components/Songs';
import {useState} from 'react';
import AddSong from './components/AddSong';
import './App.css';
import Nav from './Nav';
import About from './About';
import Spotify from './Spotify';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import background from "./img/music.jpg"



function App() {
  const [songs, setSongs] =useState( [
    {
        id: 1, 
        artist: "Beethoven",
        title: "5th Symphony",
        genre: "klassiek",
        rating: 5
    
    },
    {
        id: 2, 
        artist: "Pizzicato Five",
        title: "Twiggy Twiggy",
        genre: "j-pop",
        rating: 5
    
    }
])


// toevoegen Song

const addSong =(song) => {
  const id = Math.floor(Math.random()* 1000)+1
  const newSong ={ id, ...song}
  setSongs([...songs, newSong])
}


// delete Song

const deleteSong = (id) => {
  setSongs(songs.filter((song)=>song.id !== id))
}


return (
<div style={{ backgroundImage: `url(${background})`}} >
<div>  
    <Router>
        <div className="App">
         <Nav/>
            <Switch>
                <Route path="/about" component={About}/>
                <Route path="/spotify" component={Spotify}/>
            </Switch>
        </div>
    </Router>
        <div className="container">
              <Header title="SongSaver" />
              <AddSong onAdd={addSong}/>
              <Songs songs={songs} onDelete={deleteSong} />
           </div>
      </div>
  </div>
  );
}

export default App;
