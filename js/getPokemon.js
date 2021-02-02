import { createPkmnCard } from "./createPkmnCard.js";

import { createPkmnStatsChart } from "./createPkmnStatsChart.js";

import { getPokemonStats } from "./getPokemonStats.js";

import { handleFavoritePkmns } from "./handleFavoritePkmns.js";

export const getPokemon = async (pokemonsToFetch, isInModal) => {
  for (let i = 0; i < pokemonsToFetch.length; i++) {
    try {
      const result = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonsToFetch[i]}/`
      );
      const pokemon = await result.json();
      const pkmnCard = await createPkmnCard(pokemon, isInModal);
      results.insertAdjacentHTML("beforeend", pkmnCard);
      createPkmnStatsChart(
        getPokemonStats(pokemon.stats),
        pokemon.name,
        isInModal
      );
    } catch (error) {
      console.log(error);
      alert(`There was an error, please try again.`);
    }
  }
  //handle "add to favorites" buttons
  [...document.querySelectorAll(".pokemon-box__star-button")].forEach(
    (button) => {
      button.addEventListener("click", (e) => {
        handleFavoritePkmns(button);
        e.stopPropagation();
      });
    }
  );
  //handle showing modal after clicking a Pokemon box
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
  //handle clicking on Pokemon evolutions in modal window
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
    //close modal when you click outside of it
    pkmnModal.addEventListener("click", (e) => {
      if (e.target === e.currentTarget) {
        modal.parentNode.removeChild(modal);
      }
    });
    //handle closing the modal
    document
      .querySelector("#pkmnModalCloseBtn")
      .addEventListener("click", () => {
        modal.parentNode.removeChild(modal);
      });
  }
};
