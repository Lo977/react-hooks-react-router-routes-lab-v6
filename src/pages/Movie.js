import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movies, setMovies] = useState({ title: "", time: 0, genres: [] });
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((r) => r.json())
      .then((data) => setMovies(data))
      .catch((error) => console.log(error));
  }, [id]);
  // const movieInfo = movies.map((movie) => {
  //   return <h2>{movies.title}</h2>;
  // });
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h2>{movies.title}</h2>
        <p>{movies.time}</p>
        {movies.genres.map((genre, idx) => (
          <span key={idx}>{genre}</span>
        ))}
      </main>
    </>
  );
}

export default Movie;
