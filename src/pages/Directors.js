import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((r) => r.json())
      .then((data) => setDirectors(data))
      .catch((error) => console.error(error));
  }, []);
  const displyDirectors = directors.map((director) => {
    return (
      <article>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map((movie, idx) => (
            <li key={idx}>{movie}</li>
          ))}
        </ul>
      </article>
    );
  });
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h2>Directors Page</h2>
        {displyDirectors}
      </main>
    </>
  );
}

export default Directors;
