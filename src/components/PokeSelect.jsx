import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const PokeSelect = ({ pokename, setPokename }) => {
  PokeSelect.propTypes = {
    pokename: PropTypes.string,
    setPokename: PropTypes.func
  }

  const [pokeList, setPokeList] = useState([]);
  const BASE_URL = "https://pokemon.danielpimentel.com.br/v1/";

  useEffect(() => {
    fetch(BASE_URL + "pokemon/lista")
      .then((response) => response.json())
      .then((data) => setPokeList(data['pokemon']))
      .catch((error) => console.error(error));
    }, []);
  
  return (
    <>
      <label htmlFor="#pokeSelect">Selecione um Pokémon: </label>
      <select 
        name="pokeSelect"
        id="pokeSelect"
        value={pokename}
        onChange={(e) => setPokename(e.target.value)}
      >
        {/* <option id='nullopt' value={""}></option> */}
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
