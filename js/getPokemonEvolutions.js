import { capitalize } from "./helperFunctions.js";

const getPokemonEvolutions = (pokemonID, pokemonName, isInModal) => {
  let evolutions = [];
  // Pokémon have evolution chains, unfortunately, the ID of the evolution chain differs from the Pokémon ID
  return fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonID}/`)
    .then((response) => response.json())
    .then((response) => {
      return fetch(`${response.evolution_chain.url}`)
        .then((response) => response.json())
        .then((response) => {
          // Pokémon have up to 3 forms in a evolution chain, this function extracts name of each form of the Pokémon
          evolutions.push(response.chain.species.name);
          if (response.chain.evolves_to[0] !== undefined) {
            evolutions.push(response.chain.evolves_to[0].species.name);
          }
          if (
            response.chain.evolves_to[0] !== undefined &&
            response.chain.evolves_to[0].evolves_to[0] !== undefined
          ) {
            evolutions.push(
              response.chain.evolves_to[0].evolves_to[0].species.name
            );
          }
        });
    })
    .then(async (_) => {
      // remove current Pokémon from the list of evolutions, fetch images of evolutions and render them in the Pokémon box
      evolutions = evolutions.filter((evolution) => evolution !== pokemonName);
      // fetch evolutions, if there are any
      if (evolutions.length > 0) {
        evolutions = evolutions.map((evolution) => {
          return fetch(`https://pokeapi.co/api/v2/pokemon/${evolution}/`)
            .then((response) => response.json())
            .then(
              (response) =>
                `<img src="${response.sprites.front_default}" alt="${capitalize(
                  response.name
                )}'s Picture" title="${capitalize(
                  response.name
                )}"class="pokemon-${
                  isInModal ? "modal" : "box"
                }__evolutions-image ${evolution}">`
            );
        });
        evolutions = await Promise.all(evolutions);
        return evolutions.join(" ");
      } else {
        return "None";
      }
    });
};

export default getPokemonEvolutions;
