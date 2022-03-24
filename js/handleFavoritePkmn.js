const handleFavoritePkmn = (button) => {
  const favoritePokemon = JSON.parse(localStorage.favoritePokemon);
  if (favoritePokemon.includes(button.dataset.id)) {
    favoritePokemon.splice(favoritePokemon.indexOf(button.dataset.id), 1);
  } else if (!favoritePokemon.includes(button.dataset.id)) {
    favoritePokemon.push(button.dataset.id);
  }
  button.classList.toggle("pokemon-box__star-button--active");
  localStorage.favoritePokemon = JSON.stringify(favoritePokemon);
};

export default handleFavoritePkmn;
