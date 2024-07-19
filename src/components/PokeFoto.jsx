import PropTypes from 'prop-types';

export const PokeFoto = ({ pokedata }) => {
  PokeFoto.propTypes = {
    pokedata: PropTypes.object
  }
  try {
    if (!pokedata['img']) {
      return (
        <div id='pokefoto'>
        <img 
          src={"./public/notFound.png"}
          alt="foto do pokémon"
        />
      </div>
      )
    }
    return (
      <div id='pokefoto'>
        <img 
          src={pokedata['img']}
          alt="foto do pokémon"
        />
      </div>
    )
  } catch (TypeError) {
    return (
      <div id='pokefoto'>
        <img src={"./public/notFound.png"} alt="erro" />
      </div>
    )
  }
}
