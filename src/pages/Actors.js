import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((r) => r.json())
      .then((data) => setActors(data))
      .catch((error) => console.error(error));
  }, []);
  const displayActors = actors.map((actor, idx) => {
    return (
      <article>
        <h2>{actor.name}</h2>
        <ul>
          {actor.movies.map((movie, idx) => (
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
        <h2>Actors Page</h2>
        {displayActors}
      </main>
    </>
  );
}

export default Actors;
