import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./assets/search.svg";
import MovieCard from "./components/MovieCard";

// API KEY = 11b15e31
function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const apiURL = "http://www.omdbapi.com/?apikey=11b15e31";

  const searchMovies = async (title) => {
    const response = await fetch(`${apiURL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("");
  }, []);



  return (
    <>
      <div className="app">
        <h1>MovieDB</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search Movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <img src={SearchIcon}
           alt="Search"
           onClick={() => searchMovies(search)} />
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie,index) => (
              <MovieCard movie={movie} key={index}/>
            ))}
          </div>
        ) : (
          <div className="empty"><h3>No Movies Found</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
