export const getPokemonEvolutions = pokemonID => {
  //Pokemons have evolution chains, unfortunately, the ID of chain differs from the Pokemon ID
  let evolutionChainURL = '';
  return fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonID}/`)
    .then(response => response.json())
    .then(response => {
      return evolutionChainURL = response.evolution_chain.url;
    }).then(_ => {
      fetch(`${evolutionChainURL}`)
        .then(response => response.json())
        .then(response => {
          let evolutions = [];
          evolutions.push(response.chain.species);
          if (response.chain.evolves_to[0] !== undefined) {
            evolutions.push(response.chain.evolves_to[0].species);
          }
          if (response.chain.evolves_to[0] !== undefined && response.chain.evolves_to[0].evolves_to[0] !== undefined) {
            evolutions.push(response.chain.evolves_to[0].evolves_to[0].species);
          }
          console.log(evolutions)
          evolutions.filter(pokemon => pokemon)
          evolutions.map(evolution => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${evolution.name}/`)
              .then(response => response.json())
              .then(response => {
                return `Evolutions: <img src="${response.sprites.front_default}">`;
              });
          });

        });
    });
};