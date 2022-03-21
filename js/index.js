import getPokemon from "./getPokemon.js";

import { randomPokemonNumber } from "./helperFunctions.js";

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

  randomPokemonBtn.addEventListener("click", () => {
    results.innerHTML = "";
    resultControlsBtns.classList.remove("results-controls--active");
    getPokemon(randomPokemonNumber(1), false);
  });

  fourRndmPokemonBtn.addEventListener("click", () => {
    results.innerHTML = "";
    resultControlsBtns.classList.remove("results-controls--active");
    getPokemon(randomPokemonNumber(4), false);
  });

  // prevent adding a double eventListener after closing the modal window
  favoritePkmnBtn.removeEventListener("click");
  favoritePkmnBtn.addEventListener("click", () => {
    resultControlsBtns.classList.remove("results-controls--active");
    if (JSON.parse(localStorage.favoritePokemon).length === 0) {
      alert("No favorite Pokemon added!");
    } else {
      results.innerHTML = "";
      getPokemon(JSON.parse(localStorage.favoritePokemon), false);
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
