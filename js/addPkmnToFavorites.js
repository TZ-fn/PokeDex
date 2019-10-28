export const addPkmnToFavorites = pokemonName => {
  const favoritePokemons = JSON.parse(localStorage.favoritePokemons);
  if (!favoritePokemons.includes(pokemonName)) {
    favoritePokemons.push(pokemonName);
  }
  localStorage.favoritePokemons = JSON.stringify(favoritePokemons);
};