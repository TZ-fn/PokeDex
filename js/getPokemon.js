import {
  renderPkmnCard
} from './renderPkmnCard.js';

export const getPokemon = (pokemonNumber, howManyOfPokemons) => {
  for (let i = 0; i < howManyOfPokemons; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber()}/`)
      .then(result => result.json())
      .then(pokemon => renderPkmnCard(pokemon))
      .then(result => results.innerHTML += result);
  }
};