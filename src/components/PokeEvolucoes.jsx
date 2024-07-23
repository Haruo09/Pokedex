import PropTypes from 'prop-types';


export const PokeEvolucoes = ({ pokedata }) => {
  PokeEvolucoes.propTypes = {
    pokedata: PropTypes.object
  };

  return (
    <div id='poke-evolucoes'>
      {(!pokedata) ? 
        (
          <p>...</p>
        ) : (
          <p>Evoluções: {pokedata['evolucoes']}</p>
        )
      }
    </div>
  )
}
