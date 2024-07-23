import PropTypes from 'prop-types';

export const PokeFoto = ({ pokedata }) => {
  PokeFoto.propTypes = {
    pokedata: PropTypes.object
  }
    return (
      <div id='pokefoto'>
        {
          (!pokedata) ? (
            <img 
              src={"./public/notFound.png"}
              alt="foto do pokémon"
            />
          ) : (
            <img 
              src={pokedata['img']}
              alt="foto do pokémon"
            />
          )
        }
      </div>
    )
}
