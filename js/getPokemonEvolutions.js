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
          console.log(response.chain.species, response.chain.evolves_to[0].species, response.chain.evolves_to[0].evolves_to[0].species);
        });
    });
};