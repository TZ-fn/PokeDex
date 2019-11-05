import {
  getPokemon
} from './getPokemon.js';

export const searchPokemon = searchInput => {
  if (searchInput) {
    results.innerHTML = '';
    getPokemon([(searchInput).toLowerCase()]);
    searchBar.value = '';
  }
};