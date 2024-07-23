import PropTypes from 'prop-types';


export const PokeEvolucoes = ({ pokedata }) => {
  PokeEvolucoes.propTypes = {
    pokedata: PropTypes.object
  };

  return (
    <div id='poke-evolucoes'>
      <p>Evoluções: {(!pokedata || !pokedata['evolucoes'])?(<>Nenhuma</>):(pokedata['evolucoes'])} </p>
    </div>
  )
}
