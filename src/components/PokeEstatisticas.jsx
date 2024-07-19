import PropTypes from 'prop-types';

export const PokeEstatisticas = ({ pokedata }) => {
  PokeEstatisticas.propTypes = {
    pokedata: PropTypes.object
  };

  try {
    return (
      <div id="poke-estatisticas">
        <h2>Estatísticas</h2>
        <p>Hp: {pokedata['hp']}</p>
        <p>Atk: {pokedata['atk']}</p>
        <p>Def: {pokedata['def']}</p>
        <p>SpAtk: {pokedata['spatk']}</p>
        <p>SpDef: {pokedata['spdef']}</p>
        <p>Speed: {pokedata['speed']}</p>
      </div>
    );
  }

  catch (TypeError) {
    return (
      <div id="poke-estatisticas">
        <h2>Estatísticas</h2>
        <p>Hp: 0</p>
        <p>Atk: 0</p>
        <p>Def: 0</p>
        <p>SpAtk: 0</p>
        <p>SpDef: 0</p>
        <p>Speed: 0</p>
      </div>
    )
  }
}
