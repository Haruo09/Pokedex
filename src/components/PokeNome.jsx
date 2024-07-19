import PropTypes from 'prop-types';

export const PokeNome = ({ pokeNome }) => {
  PokeNome.propTypes = {
    pokeNome: PropTypes.string
  }

  return (
    <div>
      <h1>{pokeNome}</h1>
    </div>
  )
}
