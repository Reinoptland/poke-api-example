import { useState, useEffect } from "react";
import axios from "axios";

import PokemonCard from "./components/PokemonCard";

import "./App.css";
import spinner from "./pokeball.gif";

function App() {
  // maken een state aan
  const [pokemons, setPokemons] = useState(null);
  const [status, setStatus] = useState("loading");
  const [pagina, setPagina] = useState(0);

  // scenarios:
  // loading -> balletje
  // data is aanwezig -> pokemons laten zien
  // error -> Foutmelding, wat moet de gebruiker doen?

  console.log("pokemons", pokemons);

  // use effect
  useEffect(() => {
    // async functie definieren
    async function getPokemons() {
      try {
        // data fetchen uit de api, een array met pokemon (namen)
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pagina}`
        );
        // de state updaten met de response uit de api
        setPokemons(response.data.results);
        setStatus("done loading");
      } catch (error) {
        setStatus("error");
      }
    }

    // aanroepen
    getPokemons();
  }, [pagina]);

  // Request 1: [{ name: 'pickachu', url: 'https://'}]
  // Request 2: { name, plaatje, etc }

  // Beter (maar kunnen wij niets aan doen)
  // Request 1: [{ id, plaatje, }]
  if (status === "loading") {
    return <img src={spinner} height="400px" />;
  } else if (status === "error") {
    return <h1>O jee de pokemons zijn ontsnapt, druk up refresh</h1>;
  } else {
    return (
      <div className="App">
        <button disabled={pagina === 0} onClick={() => setPagina(pagina - 20)}>
          Vorige
        </button>
        <button
          disabled={pagina === 1100}
          onClick={() => setPagina(pagina + 20)}
        >
          Volgende
        </button>

        {pokemons &&
          // array met pokemon namen omzetten in PokemonKaartjes
          // we geven de naam door als een "prop"
          pokemons.map((pokemon) => {
            return <PokemonCard key={pokemon.name} name={pokemon.name} />;
          })}
      </div>
    );
  }
}

export default App;
