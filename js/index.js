import {
  getPokemon
} from './getPokemon.js';

import {
  randomPokemonNumber
} from './helperFunctions.js';

window.onload = () => {
  const searchBar = document.querySelector('#searchBar');
  const randomPokemonBtn = document.querySelector('#rndPkmnBtn');
  const eightRndmPokemonBtn = document.querySelector('#eightRndmPkmBtn');
  const results = document.querySelector('#results');

  searchBar.addEventListener('search', (e) => {
    results.innerHTML = '';
    getPokemon(e.target.value, 1);
  });

  randomPokemonBtn.addEventListener('click', () => {
    getPokemon(randomPokemonNumber, 1);
  });

  eightRndmPokemonBtn.addEventListener('click', () => {
    getPokemon(randomPokemonNumber, 8);
  });
};