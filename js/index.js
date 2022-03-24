import getPokemon from "./getPokemon.js";
import { randomPokemonNumber } from "./helperFunctions.js";
import handleFavoritePkmn from "./handleFavoritePkmn.js";
import searchPokemon from "./searchPokemon.js";
import listController from "./listController.js";

window.onload = () => {
  const searchBar = document.querySelector("#searchBar");
  const randomPokemonBtn = document.querySelector("#rndPkmnBtn");
  const fourRndmPokemonBtn = document.querySelector("#fourRndmPkmBtn");
  const results = document.querySelector("#results");
  const favoritePkmnBtn = document.querySelector("#favPkmnBtn");
  const searchBtn = document.querySelector("#searchBtn");
  const pkmnListBtn = document.querySelector("#pkmnListBtn");
  const resultControlsBtns = document.querySelector("#resultControlsBtns");
  const listPrevBtn = document.querySelector("#listPrevBtn");
  const listNextBtn = document.querySelector("#listNextBtn");
  const pkmnModal = document.querySelector("pkmnModal");
  localStorage.favoritePokemon = JSON.stringify([]);
  //list starts at first 8 Pokemon
  localStorage.listPosition = JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8]);

  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchPokemon(searchBar.value);
  });

  randomPokemonBtn.addEventListener("click", async () => {
    results.innerHTML = "";
    resultControlsBtns.classList.remove("results-controls--active");
    await getPokemon(randomPokemonNumber(1), false);
    [...document.querySelectorAll("#favourites-button")].forEach((button) => {
      button.addEventListener("click", (e) => {
        handleFavoritePkmn(e.currentTarget);
        e.stopPropagation();
      });
    });
  });

  fourRndmPokemonBtn.addEventListener("click", async () => {
    results.innerHTML = "";
    resultControlsBtns.classList.remove("results-controls--active");
    await getPokemon(randomPokemonNumber(4), false);
    [...document.querySelectorAll("#favourites-button")].forEach((button) => {
      button.addEventListener("click", (e) => {
        handleFavoritePkmn(e.currentTarget);
        e.stopPropagation();
      });
    });
  });

  favoritePkmnBtn.addEventListener("click", async () => {
    resultControlsBtns.classList.remove("results-controls--active");
    if (JSON.parse(localStorage.favoritePokemon).length === 0) {
      alert("No favorite Pokemon added!");
    } else {
      results.innerHTML = "";
      await getPokemon(JSON.parse(localStorage.favoritePokemon), false);
      [...document.querySelectorAll("#favourites-button")].forEach((button) => {
        button.addEventListener("click", (e) => {
          handleFavoritePkmn(e.currentTarget);
          e.stopPropagation();
        });
      });
    }
  });

  pkmnListBtn.addEventListener("click", () => {
    listController("default", JSON.parse(localStorage.listPosition));
  });

  listNextBtn.addEventListener("click", () => {
    listController("forward", JSON.parse(localStorage.listPosition));
  });

  listPrevBtn.addEventListener("click", () => {
    listController("backward", JSON.parse(localStorage.listPosition));
  });
};
