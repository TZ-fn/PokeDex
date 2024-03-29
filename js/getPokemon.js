import createPkmnCard from "./createPkmnCard.js";
import { loadingItems } from "./helperFunctions.js";
import createPkmnStatsChart from "./createPkmnStatsChart.js";
import getPokemonStats from "./getPokemonStats.js";
import handleFavoritePkmn from "./handleFavoritePkmn.js";

const getPokemon = async (pokemonToFetch, isInModal) => {
  loadingItems(true);
  for (let i = 0; i < pokemonToFetch.length; i++) {
    try {
      const result = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonToFetch[i]}/`
      );
      if (result.status === 404) {
        throw new Error("Pokemon not found!");
      }
      const pokemon = await result.json();
      const pkmnCard = await createPkmnCard(pokemon, isInModal);
      results.insertAdjacentHTML("beforeend", pkmnCard);
      createPkmnStatsChart(
        getPokemonStats(pokemon.stats),
        pokemon.name,
        isInModal
      );
    } catch (error) {
      alert(
        `Error: Pokemon ${pokemonToFetch[i]} hasn't been found. Please try again.`
      );
    }
  }

  loadingItems(false);

  // handle showing modal after clicking a Pokemon box
  [...document.querySelectorAll(".pokemon-box")].forEach((box) => {
    if (!isInModal) {
      box.addEventListener("click", async (e) => {
        if (e.target.classList[0] === "pokemon-box__type-badge") {
          await getPokemon([[...e.currentTarget.classList][1]], true);
          return;
        }
        if (
          e.target.classList[1] !== e.currentTarget.classList[1] &&
          e.target.classList[1] !== undefined
        ) {
          await getPokemon([[...e.target.classList][1]], true);
        } else {
          await getPokemon([[...e.currentTarget.classList][1]], true);
        }
      });
    }
  });

  // handle clicking on Pokémon evolutions in modal window
  if (isInModal) {
    const modal = document.querySelector("#pkmnModal");
    document
      .querySelector(".pokemon-modal__content")
      .addEventListener("click", async (e) => {
        if (e.target.classList[0] === "pokemon-box__type-badge") return;
        if (
          e.target.classList[1] !== e.currentTarget.classList[1] &&
          e.target.classList[1] !== undefined
        ) {
          modal.parentNode.removeChild(modal);
          await getPokemon([[...e.target.classList][1]], true);
        }
      });

    // add an event listener to the add to favourites button
    document
      .querySelector("#favourites-button-modal")
      .addEventListener("click", (e) => {
        handleFavoritePkmn(e.currentTarget);
        e.stopPropagation();
      });

    // close modal when you click outside of it
    pkmnModal.addEventListener("click", (e) => {
      if (e.target === e.currentTarget) {
        modal.parentNode.removeChild(modal);
      }
    });

    // handle closing the modal
    document
      .querySelector("#pkmnModalCloseBtn")
      .addEventListener("click", () => {
        modal.parentNode.removeChild(modal);
      });
  }
};

export default getPokemon;
