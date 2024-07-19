import PropTypes from 'prop-types';


export const PokeEvolucoes = ({ pokedata }) => {
  PokeEvolucoes.propTypes = {
    pokedata: PropTypes.object
  };

  try {
    return (
      <div id='poke-evolucoes'>
        <p>Evoluções: {pokedata['evolucoes']}</p>
      </div>
    )
  }

  catch (TypeError) {
    return (
      <div id='poke-evolucoes'>
        ...
      </div>
    )
  }
}
