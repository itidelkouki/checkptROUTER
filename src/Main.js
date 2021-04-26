import React,{useState} from 'react';
import App from './App';
import {Route} from "react-router-dom"
import MovieDescription from "./descriptiontrailer"


const Main =() =>{

    const tabmovies = [
        { title:"Eté 85", description:"The film is part of the Cannes 2020 Official Selection. In the summer of her 16 years, Alexis, while out at sea on the Normandy coast, is heroically saved from the sinking by 18-year-old David.", id:1, posterURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcVD5n0S9u16LCofYfQ4OW6BM5chK2nJ9B2Q&usqp=CAU", rate : "4" },
        { title:"We can do it", description:" In World War II millions of courageous women, most of them teenagers, joined the labor force and coined the term 'Rosie the Riveter.' They didn't realize they were changing the world forever.", id:2, posterURL: "https://f.hellowork.com/blogdumoderateur/2013/05/We-Can-Do-It-Rosie-the-Riveter-Poster-Vintage-Poster.jpg", rate : "1" },
        { title:"Walk ride Rodeo", description:"In this american film a 19-year-old Amberley Snyder(Spencer Locke)is a nationally-ranked rodeo barrel racer who spends most of her time training with her horse Power at her home in Utah.", id:3, posterURL: "https://lestrouvaillesdesarah.com/wp-content/uploads/2019/03/MV5BODU4MjA5MDE1MF5BMl5BanBnXkFtZTgwMzM2MDA0NzM@._V1_-800x1185.jpg", rate : "3" },
        { title:"Dora ", description:"American adventure comedy film that is a live-action adaptation of the Nick Jr. animated television series Dora the Explorer and directed by James Bobin.", id:4, posterURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ2tWq4FFUZvo67qmHh4zxBY87xdHhdwcJ2g&usqp=CAU", rate : "5" },
        { title:"Fantastic Mr.Fox", description:"American comedy film directed by Wes Anderson, who co-wrote the screenplay with Noah Baumbach. The project is based on the 1970 children's novel of the same name by Roald.", id:5, posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHQ2uDcOgxoS7hhsRWFLwaaZedrBlQJz7-3w&usqp=CAU", rate : "2" },
        { title:"La course des tuques", description:"Quebec 3D animated film directed by François Brisson and Benoît Godbout and released in 2018. This film is the sequel to the film released in 2015, La Guerre des tuques 3D.", id:6, posterURL:"http://www.filmsquebec.com/wp-content/uploads/2018/11/Course_des_tuques_affiche.jpg", rate : "4" },
        
      ]
      
      const[movies, setMovies] =useState(tabmovies);

      const addNewmovie =(e,movie)=>{
          e.preventDefault();
            if (
              movie.title &&
              movie.posterURL &&
              movie.rate &&
              movie.description 
            ) {    
          setMovies([...movies,movie]);
            }
          else alert("please insert required informations")
        };


      const [rateSearch, setRateSearch]=useState(1);
      const searchmovie =(m)=> {
            setMovies(movies.filter(el =>
            el.title.toLowerCase().includes(m.toLowerCase().trim())&&
            el.rate >= rateSearch),
            );
            };  


return (
<div>
<Route exact path="/" render={()=><App movies={movies} addNewmovie={addNewmovie} searchmovie={searchmovie}  rateSearch={rateSearch} setRateSearch={setRateSearch}/>} />
<Route  path="/descriptiontrailer/:movieId"  render={(props) => <MovieDescription {...props} movies={movies} /> }/>,
</div>)
};
export default Main;