import { useState, useEffect } from "react";
import axios from "axios";

import PokemonCard from "./components/PokemonCard";

import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    async function getPokemons() {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`
        );
        console.log("DIT KREGEN WE TERUG:", response.data.results);
        setPokemons(response.data.results);
        // Werkt niet want het component moet nog gererendered worden :(
        console.log("DIT WERKT OOK NIET:", pokemons);
      } catch (error) {}
    }

    getPokemons();
    // Werkt niet want getPokemons is een async function :(
    console.log("DIT WERKT NIET:", pokemons);
    console.log("hallo! Ik ben een effect");
  }, []);

  // Vuistregel:
  // Controleren wat de state op dit moment is
  // altijd boven je return statement

  console.log("WAT IS NU DE STATE", pokemons); // 2x uitgevoerd

  return (
    <div className="App">
      <PokemonCard name="pikachu" />
      <PokemonCard name="ditto" />
      <PokemonCard name="geodude" />
    </div>
  );
}

export default App;
