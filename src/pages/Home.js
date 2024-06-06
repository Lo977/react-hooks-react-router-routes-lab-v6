import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((r) => r.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error(error));
  }, []);
  const displayMovie = movies.map((movie) => {
    return <MovieCard key={movie.id} movie={movie} />;
  });
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h2>Home Page</h2>
        {displayMovie}
      </main>
    </>
  );
}

export default Home;
