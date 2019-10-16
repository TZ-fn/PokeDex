const numberOfAllPokemons = 808;

export const randomPokemonNumber = () => Math.floor(Math.random() * (numberOfAllPokemons - 1)) + 1;
export const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);