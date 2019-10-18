import {
  createPkmnCard
} from './createPkmnCard.js';

import {
  createPkmnStatsGraph
} from './createPkmnStatsGraph.js';

import {
  getPokemonStats
} from './getPokemonStats.js';

export const getPokemon = async (pokemonNumber, howManyOfPokemons) => {
  for (let i = 0; i < howManyOfPokemons; i++) {
    try {
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber()}/`)
      const pokemon = await result.json()
      const pkmnCard = await createPkmnCard(pokemon);
      results.insertAdjacentHTML('beforeend', pkmnCard);
      createPkmnStatsGraph(getPokemonStats(pokemon.stats), pokemon.name);
    } catch (error) {
      alert(`There was an error: ${error}`)
    }
  }
};