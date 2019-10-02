export const getPokemonEvolutions = pokemonID => {
  //Pokemons have evolution chains, unfortunately, the ID of  the chain differs from the Pokemon ID
  return fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonID}/`)
    .then(response => response.json())
    .then(response => {
      return fetch(`${response.evolution_chain.url}`)
        .then(response => response.json())
        .then(response => {
          let evolutions = [];
          //Pokemon have up to 3 forms in a evolution chain, this function extracts name of each form of the Pokemon
          evolutions.push(response.chain.species.name);
          if (response.chain.evolves_to[0] !== undefined) {
            evolutions.push(response.chain.evolves_to[0].species.name);
          }
          if (response.chain.evolves_to[0] !== undefined && response.chain.evolves_to[0].evolves_to[0] !== undefined) {
            evolutions.push(response.chain.evolves_to[0].evolves_to[0].species.name);
          }
          //this function fetches images of each form and renders them in the Pokemon box
          // evolutions.filter(pokemon => pokemon);
          return evolutions.map(evolution => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${evolution}/`)
              .then(response => response.json())
              .then(response => {
                return `Evolutions: <img src="${response.sprites.front_default}">`;
              });
          });
        });
    });
};