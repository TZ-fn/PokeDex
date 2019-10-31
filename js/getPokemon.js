import {
  createPkmnCard
} from './createPkmnCard.js';

import {
  createPkmnStatsGraph
} from './createPkmnStatsGraph.js';

import {
  getPokemonStats
} from './getPokemonStats.js';

import {
  handleFavoritePkmns
} from './handleFavoritePkmns.js'

export const getPokemon = async (pokemonsToFetch) => {
  for (let i = 0; i < pokemonsToFetch.length; i++) {
    try {
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonsToFetch[i]}/`);
      const pokemon = await result.json()
      const pkmnCard = await createPkmnCard(pokemon);
      results.insertAdjacentHTML('beforeend', pkmnCard);
      createPkmnStatsGraph(getPokemonStats(pokemon.stats), pokemon.name);
    } catch (error) {
      console.log(error)
      alert(`There was an error, please try again.`)
    }
  }
  [...document.querySelectorAll('.pokemon-box__star-button')].forEach(button => {
    button.addEventListener('click', (e) => {
      handleFavoritePkmns(button);
      e.stopPropagation();
    })
  })
};