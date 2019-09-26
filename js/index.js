import {
  renderPkmnCard
} from './renderPkmnCard.js';

window.onload = () => {

  const randomPokemonBtn = document.querySelector('#rndPkmnBtn');
  const eightRndmPokemonBtn = document.querySelector('#eightRndmPkmBtn');
  const results = document.querySelector('#results');

  const randomPokemonNumber = () => Math.floor(Math.random() * (808 - 1)) + 1;

  const getPokemon = (pokemonNumber, howManyOfPokemons) => {
    for (let i = 0; i < howManyOfPokemons; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber()}/`)
        .then(result => result.json())
        .then(pokemon => {
          results.innerHTML += renderPkmnCard(pokemon);
        });
    }
  };

  randomPokemonBtn.addEventListener('click', () => {
    getPokemon(randomPokemonNumber, 1);
  });

  eightRndmPokemonBtn.addEventListener('click', () => {
    getPokemon(randomPokemonNumber, 8);
  });
};