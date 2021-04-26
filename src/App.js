
import React from 'react';
import './App.css';
import MovieList from './MovieList';
import AddCard from './AddCard';
import Search from './Search';
import Rate from'./Rate';


function App (props) {

 
 
 

    return(

    <div className="App">
      <h1>Movie Application</h1>
      <AddCard    movies={props.movies} addNewmovie={props.addNewmovie}/>,
      <Search movies={props.movies}   searchmovie={props.searchmovie} rateSearch={props.rateSearch}/>,
      <Rate setRateSearch={props.setRateSearch} rateSearch={props.rateSearch} />
      <MovieList movies={props.movies}  searchmovie={props.searchmovie} />,
      

         
    </div>
 );

    };
export default App;