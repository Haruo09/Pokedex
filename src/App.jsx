import { PokeSelect } from "./components/PokeSelect";
import { PokeNome } from "./components/PokeNome";
import { PokeInfos } from "./components/PokeInfos";
import { PokeFoto } from "./components/PokeFoto";
import { useEffect, useState } from "react";
import { PokeEstatisticas } from "./components/PokeEstatisticas";
import { PokeEvolucoes } from "./components/PokeEvolucoes";
import './App.css';


function App() {
  const [pokename, setPokename] = useState('');
  const [pokedata, setPokedata] = useState({});

  useEffect(() => {
    fetch("https://pokemon.danielpimentel.com.br/v1/pokemon/nome/" + pokename)
      .then((response) => response.json())
      .then((data) => {setPokedata(data['pokemon'])})
      .catch((err) => console.log(err))
    ;
  }, [pokename]);
  return (
    <>
      <header>
        <PokeSelect pokename={pokename} setPokename={setPokename}/>
      </header>
      <main>
        <div id="left">
          <PokeNome pokename={pokename}/>
          <PokeFoto pokedata={pokedata}/>
        </div>
        <div id="right">
          <PokeInfos pokedata={pokedata}/>
          <PokeEstatisticas pokedata={pokedata} />
        </div>
      </main>
      <footer>
        <PokeEvolucoes pokedata={pokedata} />
      </footer>
    </>
  )
}

export default App
