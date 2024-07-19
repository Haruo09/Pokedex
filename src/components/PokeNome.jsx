import PropTypes from 'prop-types';

export const PokeNome = ({ pokename }) => {
  PokeNome.propTypes = {
    pokename: PropTypes.string
  }

  return (
    <div id='pokenome'>
      <h1>{pokename}</h1>
    </div>
  )
}
