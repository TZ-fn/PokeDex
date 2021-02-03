const numberOfAllPokemon = 808;

export const randomPokemonNumber = (howManyPokemon) => {
  const result = [];
  for (let i = 0; i < howManyPokemon; i++) {
    result.push(Math.floor(Math.random() * (numberOfAllPokemon - 1)) + 1);
  }
  return result;
};

export const loadingItems = (isLoading) => {
  const roller = document.querySelector("#roller");
  const rollerWrapper = document.querySelector("#rollerWrapper");
  if (isLoading === true) {
    roller.style.display = "inline-block";
    rollerWrapper.style.display = "inline-block";
  } else {
    roller.style.display = "none";
    rollerWrapper.style.display = "none";
  }
};

export const capitalize = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const isPkmnInFavorites = (pkmnName) =>
  [...JSON.parse(localStorage.favoritePokemon)].includes(pkmnName);
