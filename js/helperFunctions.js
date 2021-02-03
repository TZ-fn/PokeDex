const numberOfAllPokemons = 808;

export const randomPokemonNumber = (howManyPokemons) => {
  const result = [];
  for (let i = 0; i < howManyPokemons; i++) {
    result.push(Math.floor(Math.random() * (numberOfAllPokemons - 1)) + 1);
  }
  return result;
};

export const loadingItems = (isLoading) => {
  const roller = document.querySelector("#roller");
  if (isLoading === true) {
    roller.style.display = "inline-block";
  } else {
    roller.style.display = "none";
  }
};

export const capitalize = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const isPkmnInFavorites = (pkmnName) =>
  [...JSON.parse(localStorage.favoritePokemons)].includes(pkmnName);
