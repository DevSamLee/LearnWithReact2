import {useEffect, useState} from "react";
import Movie from "../components/Movie";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
    .then((response) => response.json())
    .then((json) => { 
      setMovies(json.data.movies);
      setLoading(false)
    });
    useEffect(() => {
    getMovies();
    }, []);
  console.log(movies);
  return (
  <div>
    {loading ? (
      <h1>Loading...</h1>
    ) : ( 
      <div>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            coverImg={movie.medium_cover_image} 
            title={movie.title} 
            genres={movie.genres} 
          />
        ))}
      </div>
    )}
  </div>
  );
}

export default App;