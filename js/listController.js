import getPokemon from "./getPokemon.js";

const listController = (directionOfBrowsing, listPosition) => {
  results.innerHTML = "";
  const numberOfPokemonToFetch = 8;
  const pokemonToFetch = listPosition.map((pokemonIndex) => {
    if (directionOfBrowsing === "default") {
      return pokemonIndex;
    }
    if (directionOfBrowsing === "forward") {
      return pokemonIndex + numberOfPokemonToFetch;
    }
    if (directionOfBrowsing === "backward") {
      return pokemonIndex - numberOfPokemonToFetch;
    }
  });
  localStorage.listPosition = JSON.stringify(pokemonToFetch);
  getPokemon(pokemonToFetch, false);
  if (pokemonToFetch[0] === 1) {
    listPrevBtn.style.display = "none";
  } else if (pokemonToFetch[7] === 808) {
    listNextBtn.style.display = "none";
  } else {
    listPrevBtn.style.display = "inline-block";
    listNextBtn.style.display = "inline-block";
  }
  resultControlsBtns.classList += " results-controls--active";
};

export default listController;
