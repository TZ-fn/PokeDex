const numberOfAllPokemon = 808;

export const randomPokemonNumber = (howManyPokemon) => {
  const result = [];
  for (let i = 0; i < howManyPokemon; i++) {
    result.push(Math.floor(Math.random() * (numberOfAllPokemon - 1)) + 1);
  }
  return result;
};

export const loadingItems = (isLoading) => {
  const rollerWrapper = document.querySelector("#rollerWrapper");
  if (isLoading === true) {
    rollerWrapper.style.display = "block";
  } else {
    rollerWrapper.style.display = "none";
  }
};

export const capitalize = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const isPkmnInFavorites = (pkmnName) =>
  [...JSON.parse(localStorage.favoritePokemon)].includes(pkmnName);
