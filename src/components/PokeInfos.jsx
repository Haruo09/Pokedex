import PropTypes from 'prop-types';
import { v1 } from 'uuid';

export const PokeInfos = ({ pokedata }) => {

  PokeInfos.propTypes = {
    pokename: PropTypes.string,
    pokedata: PropTypes.object
  }

  try {
    return (
      <div id='pokeinfos'>
        <h2>Informações</h2>
        <p>Número: #{pokedata['numero']}</p>
        <p>Peso: {pokedata['peso']/1000} kg</p>
        <p>Altura: {pokedata['altura']} cm</p>
        <p>Tipo: {pokedata['tipo'].split(',').map((tipo) => (<span key={v1()}>{tipo} </span>))}</p>
        <p>Geração: {pokedata['geracao']}</p>
      </div>
    ) 
  }
  catch (TypeError) {
    console.log("Não foi possível carregar");
  }
}
