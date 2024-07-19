import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const PokeSelect = ({ setPokename }) => {
  PokeSelect.propTypes = {
    setPokename: PropTypes.func
  }

  const [pokeList, setPokeList] = useState([]);
  // const BASE_URL = "https://pokemon.danielpimentel.com.br/v1/";

  useEffect(() => {
    fetch('https://pokemon.danielpimentel.com.br/v1/pokemon/lista')
      .then((response) => response.json())
      .then((data) => setPokeList(data['pokemon']))
      .catch((error) => console.error(error));
      
    }, []);
  
  return (
    <>
      <label htmlFor="#pokeSelect">Selecione um Pokémon: </label>
      <select name="pokeSelect" id="pokeSelect" onChange={(e) => setPokename(e.target.value)}>
        {pokeList.map((pokemon) => (
          <option 
            key={pokemon.numero}
            value={pokemon.nome}
          >
            {pokemon.nome}
          </option>
        ))}
      </select>
    </>
  );
  
};

export default PokeSelect;
