import PokemonCard from "./components/PokemonCard";

import "./App.css";

function App() {
  return (
    <div className="App">
      <PokemonCard name="pikachu" />
      <PokemonCard name="ditto" />
      <PokemonCard name="geodude" />
    </div>
  );
}

export default App;
