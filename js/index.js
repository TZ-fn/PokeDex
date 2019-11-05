import {
  getPokemon
} from './getPokemon.js';

import {
  randomPokemonNumber
} from './helperFunctions.js';

import {
  searchPokemon
} from './searchPokemon.js';

window.onload = () => {
  const searchBar = document.querySelector('#searchBar');
  const randomPokemonBtn = document.querySelector('#rndPkmnBtn');
  const fourRndmPokemonBtn = document.querySelector('#fourRndmPkmBtn');
  const results = document.querySelector('#results');
  const favoritePkmnsBtn = document.querySelector('#favPkmnsBtn');
  const searchBtn = document.querySelector('#searchBtn');
  localStorage.favoritePokemons = JSON.stringify([]);

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchPokemon(searchBar.value);
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
    if (JSON.parse(localStorage.favoritePokemons).length === 0) {
      alert('No favorite Pokemons added!');
    } else {
      results.innerHTML = '';
      getPokemon(JSON.parse(localStorage.favoritePokemons));
    }
  });
};