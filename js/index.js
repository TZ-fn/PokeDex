import {
  getPokemon
} from './getPokemon.js';

import {
  randomPokemonNumber
} from './helperFunctions.js';

window.onload = () => {
  window.charts = {};
  const randomPokemonBtn = document.querySelector('#rndPkmnBtn');
  const eightRndmPokemonBtn = document.querySelector('#eightRndmPkmBtn');
  const results = document.querySelector('#results');

  randomPokemonBtn.addEventListener('click', () => {
    getPokemon(randomPokemonNumber, 1);
  });

  eightRndmPokemonBtn.addEventListener('click', () => {
    getPokemon(randomPokemonNumber, 8);
  });
};