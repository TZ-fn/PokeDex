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
  const favoritePkmnsBtn = document.querySelector('#favPkmnsBtn');
  localStorage.favoritePokemons = JSON.stringify([]);

  searchBar.addEventListener('search', (e) => {
    if (e.target.value) {
      results.innerHTML = '';
      getPokemon([(e.target.value).toLowerCase()]);
    }
  });

  randomPokemonBtn.addEventListener('click', () => {
    results.innerHTML = '';
    getPokemon(randomPokemonNumber(1));
  });

  fourRndmPokemonBtn.addEventListener('click', () => {
    results.innerHTML = '';
    getPokemon(randomPokemonNumber(4));
  });

  favoritePkmnsBtn.addEventListener('click', () => {
    getPokemon(JSON.parse(localStorage.favoritePokemons));
  });
};