import {
  getPokemon
} from './getPokemon.js';

export const listController = (directionOfBrowsing, listPosition) => {
  const numberOfPokemonsToFetch = 8;
  const pokemonsToFetch = listPosition.map(pokemonIndex => {
    if (directionOfBrowsing === 'default') {
      return pokemonIndex;
    }
    if (directionOfBrowsing === 'forward') {
      return pokemonIndex + numberOfPokemonsToFetch;
    }
    if (directionOfBrowsing === 'backward') {
      return pokemonIndex - numberOfPokemonsToFetch;
    }
  });
  localStorage.listPosition = JSON.stringify(pokemonsToFetch);
  getPokemon(pokemonsToFetch, false);
  if (pokemonsToFetch[0] === 1) {
    listPrevBtn.style.display = 'none';

  } else if (pokemonsToFetch[7] === 808) {
    listNextBtn.style.display = 'none';
  } else {
    listPrevBtn.style.display = 'inline-block';
    listNextBtn.style.display = 'inline-block';
  }
  resultControlsBtns.classList += ' results-controls--active';
};