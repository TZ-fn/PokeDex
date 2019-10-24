import {
  getPokemon
} from './getPokemon.js';

import {
  randomPokemonNumber
} from './helperFunctions.js';

window.onload = () => {
  const searchBar = document.querySelector('#searchBar');
  const randomPokemonBtn = document.querySelector('#rndPkmnBtn');
  const fourRndmPokemonBtn = document.querySelector('#fourRndmPkmBtn');
  const results = document.querySelector('#results');

  searchBar.addEventListener('search', (e) => {
    if (e.target.value) {
      results.innerHTML = '';
      getPokemon((e.target.value).toLowerCase(), 1);
    }
  });

  randomPokemonBtn.addEventListener('click', () => {
    results.innerHTML = '';
    getPokemon(randomPokemonNumber, 1);
  });

  fourRndmPokemonBtn.addEventListener('click', () => {
    results.innerHTML = '';
    getPokemon(randomPokemonNumber, 4);
  });
};