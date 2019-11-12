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

export const getPokemon = async (pokemonsToFetch, isInModal) => {
  results.innerHTML = '';
  resultControlsBtns.classList.remove('results-controls--active');
  for (let i = 0; i < pokemonsToFetch.length; i++) {
    try {
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonsToFetch[i]}/`);
      const pokemon = await result.json()
      const pkmnCard = await createPkmnCard(pokemon, isInModal);
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
  });
  [...document.querySelectorAll('.pokemon-box')].forEach(button => {
    button.addEventListener('click', (e) => {
      e.path.filter(element => {
        console.log(element.classList)
        if (element.classList !== undefined) {
          if (element.classList.contains('pokemon-box')) {
            return element.classList.value;
          }
        }
      });
    })
  })
};