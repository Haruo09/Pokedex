import PokeSelect from "./components/PokeSelect";
import { PokeNome } from "./components/PokeNome";
import { useState } from "react";

function App() {
  const [pokename, setPokename] = useState('');
  return (
    <>
      <header>
        <PokeSelect setPokename={setPokename}/>
        <PokeNome pokeNome={pokename}/>
      </header>
      <main>
        
        {/* TODO: 
          -> Nome;
          -> Foto;
          -> Informações;
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
