import {
  capitalize
} from './helperFunctions.js';

export const getPokemonEvolutions = (pokemonID, pokemonName, isInModal) => {
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
    }).then(async _ => {
      //remove current Pokemon from the list of evolutions, fetch images of evolutions and render them in the Pokemon box
      evolutions = evolutions.filter(evolution => evolution !== pokemonName);
      if (evolutions.length > 0) {
        evolutions = evolutions.map(evolution => {
          return fetch(`https://pokeapi.co/api/v2/pokemon/${evolution}/`)
            .then(response => response.json())
            .then(response => `<img src="${response.sprites.front_default}" alt="${capitalize(response.name)}'s Picture" title="${capitalize(response.name)}"class="pokemon-${isInModal ? 'modal': 'box'}__evolutions-image ${evolution}">`);
        });
        evolutions = await Promise.all(evolutions)
        return evolutions.join(' ');
      } else {
        return 'None';
      }
    });
};