import {
  renderPkmnCard
} from './renderPkmnCard.js';

import {
  renderPokemonStats
} from './renderPokemonStats.js';

import {
  getPokemonStats
} from './getPokemonStats.js';

export const getPokemon = async (pokemonNumber, howManyOfPokemons) => {
  for (let i = 0; i < howManyOfPokemons; i++) {
    try {
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber()}/`)
      const pokemon = await result.json()
      const pkmnCard = await renderPkmnCard(pokemon);
      results.innerHTML += pkmnCard;
      renderPokemonStats(getPokemonStats(pokemon.stats), pokemon.name);
    } catch (error) {
      console.log(error);
    }
  }
};