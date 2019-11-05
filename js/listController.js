import {
  getPokemon
} from './getPokemon.js';

export const listController = (directionOfBrowsing, listPosition) => {
  const numberOfPokemonsToFetch = 8;
  const pokemonsToFetch = listPosition.map(pokemonIndex => {
    if (directionOfBrowsing === 'forward') {
      return pokemonIndex + numberOfPokemonsToFetch;
    }
    if (directionOfBrowsing === 'backward') {
      return pokemonIndex - numberOfPokemonsToFetch;

    }
  });
  localStorage.listPosition = JSON.stringify(pokemonsToFetch);
  return getPokemon(pokemonsToFetch);
};