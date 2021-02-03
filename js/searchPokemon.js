import getPokemon from "./getPokemon.js";

const searchPokemon = (searchInput) => {
  if (searchInput) {
    results.innerHTML = "";
    getPokemon([searchInput.toLowerCase()]);
    searchBar.value = "";
  }
};

export default searchPokemon;
