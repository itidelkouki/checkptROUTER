import React, { useState } from 'react';


function Search(props) {

const [searchTerm, setSearchTerm] = useState("");
const handleChange = event => {
      setSearchTerm(event.target.value);
    };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <button className= "search-Button" onClick={()=> props.searchmovie(searchTerm)}>Search</button>

     


    </div>
  );
}

export default Search;