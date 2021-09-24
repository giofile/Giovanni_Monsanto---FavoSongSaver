import React from 'react'
import {FaTimes} from 'react-icons/fa'


const Song = ({song, onDelete}) => {
    return (
        <div className='song-list'>
            <h3>{song.artist}/{song.title} - {song.genre} - rating: {song.rating}<FaTimes style={{color:"red"}} onClick={() =>onDelete(song.id)} 
            /></h3>
            
        </div>
    )
}

export default Song
