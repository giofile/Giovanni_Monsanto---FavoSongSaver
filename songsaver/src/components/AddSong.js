import React from "react";
import { useState } from "react";

const AddSong =({onAdd}) =>{
    const [artist, setArtist] = useState('')
    const [title, setTitle] =useState('')
    const [genre, setGenre] = useState('')
    const [rating, setRating] = useState('')

   const onSubmit = (e) => {  
       e.preventDefault()
       if(!artist,!title,!genre, !rating){
           alert ('maak de form volledig')
           return
       }
       onAdd ({artist,title,genre,rating})
       setArtist('')
       setTitle('')
       setGenre('')
       setRating('')
   }



    return(
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label>Artist</label>
                <input type="text" placeholder=" Voeg Artiest toe" value={artist} onChange= {(e)=> setArtist(e.target.value)}/>
                </div>
            <div className="form-control">
                <label>Title</label>
                <input type="text" placeholder="Songtitel"
                value={title} onChange= {(e)=> setTitle(e.target.value)}/>
                </div>
            <div className="form-control">
                <label>Genre</label>
                <input type="text" placeholder="Genre"
                value={genre} onChange= {(e)=> setGenre(e.target.value)}
                />
                </div>
            <div className="form-control">
                <label>Rating</label>
                <input type="number" min="1" max="5" placeholder=" 1 (vreselijk) tot 5 (uitmuntend)"
                value={rating} onChange= {(e)=> setRating(e.target.value)}/>
                </div>
<input type='submit' value='Add Song To List' className='btn btn-block'/>
        </form>
    )
}

export default AddSong