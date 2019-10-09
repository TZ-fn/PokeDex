import {
  capitalize
} from './helperFunctions.js';

export const getPokemonEvolutions = (pokemonID, pokemonName) => {
  let evolutions = [];
  //Pokemons have evolution chains, unfortunately, the ID of the chain differs from the Pokemon ID
  return fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonID}/`)
    .then(response => response.json())
    .then(response => {
      return fetch(`${response.evolution_chain.url}`)
        .then(response => response.json())
        .then(response => {
          //Pokemon have up to 3 forms in a evolution chain, this function extracts name of each form of the Pokemon
          evolutions.push(response.chain.species.name);
          if (response.chain.evolves_to[0] !== undefined) {
            evolutions.push(response.chain.evolves_to[0].species.name);
          }
          if (response.chain.evolves_to[0] !== undefined && response.chain.evolves_to[0].evolves_to[0] !== undefined) {
            evolutions.push(response.chain.evolves_to[0].evolves_to[0].species.name);
          }
        });
    }).then(_ => {
      //remove current Pokemon from the list of evolutions and fetch images of evolutions and render them in the Pokemon box
      evolutions = evolutions.filter(evolution => evolution !== pokemonName).map(evolution => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${evolution}/`)
          .then(response => response.json())
          .then(response => `<img src="${response.sprites.front_default}" alt="${capitalize(response.name)}'s Picture">`);
      });
      return Promise.all(evolutions);
    });
};