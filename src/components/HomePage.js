import { useState, useEffect } from "react";
import axios from "axios";

import PokemonCard from "./PokemonCard";

import "./App.css";
import spinner from "../pokeball.gif";

export default function HomePage(props) {
  const [pokemons, setPokemons] = useState(null);
  const [status, setStatus] = useState("loading");
  const [pagina, setPagina] = useState(0);

  //   console.log("PROPS IN HOMEPAGE", props.setLoggedIn);

  useEffect(() => {
    async function getPokemons() {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pagina}`
        );
        setPokemons(response.data.results);
        setStatus("done loading");
      } catch (error) {
        setStatus("error");
      }
    }

    getPokemons();
  }, [pagina]);

  if (status === "loading") {
    return <img src={spinner} height="400px" alt="loading" />;
  } else if (status === "error") {
    return <h1>O jee de pokemons zijn ontsnapt, druk up refresh</h1>;
  } else {
    return (
      <div className="App">
        <div>
          <button onClick={() => props.setLoggedIn(true)}>Inloggen</button>
        </div>
        <div className="next-previous">
          <button
            disabled={pagina === 0}
            onClick={() => setPagina(pagina - 20)}
          >
            Vorige
          </button>
          <button
            disabled={pagina === 1100}
            onClick={() => setPagina(pagina + 20)}
          >
            Volgende
          </button>
        </div>
        <div className="pokemons">
          {pokemons &&
            pokemons.map((pokemon) => {
              return <PokemonCard key={pokemon.name} name={pokemon.name} />;
            })}
        </div>
      </div>
    );
  }
}
