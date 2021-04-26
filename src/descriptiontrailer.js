import React from 'react';
import { Link } from "react-router-dom";
import './description.css';

const MovieDescription = (props) => {
const movieFound = props.movies.find(
        (movie) => movie.id == props.match.params.movieId
      );
    return (
         
<div> 
          {
              console.log(props.match.params.movieId)
          }
    
    <img variant="top"  src={movieFound.posterURL} height= "400px" width= '400px'  />
    <p>{movieFound.description}</p>
    <Link to={`/`}>  
    <button className="home-Button"> Return to home page</button>
    </Link>
</div>
        );}

export default MovieDescription;