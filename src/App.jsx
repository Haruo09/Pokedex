import { PokeSelect } from "./components/PokeSelect";
import { PokeNome } from "./components/PokeNome";
import { PokeInfos } from "./components/PokeInfos";
import { PokeFoto } from "./components/PokeFoto";
import { useEffect, useState } from "react";

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
        <PokeNome pokename={pokename}/>
        <PokeFoto pokedata={pokedata}/>
        <PokeInfos pokedata={pokedata}/>
        {/* TODO: 
          -> Foto;
          -> Estatísticas.
         */}
      </main>
      <footer>
          {/* TODO: Evoluções */}
      </footer>
    </>
  )
}

export default App
