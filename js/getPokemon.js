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
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber()}/`)
    const pokemon = await result.json()
    console.log(getPokemonStats(pokemon.stats))
    await renderPkmnCard(pokemon);
    await renderPokemonStats(getPokemonStats(pokemon.stats));
  }
};