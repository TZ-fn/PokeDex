const handleFavoritePkmn = (button) => {
  const favoritePokemon = JSON.parse(localStorage.favoritePokemon);
  if (favoritePokemon.includes(button.id)) {
    favoritePokemon.splice(favoritePokemon.indexOf(button.id), 1);
  } else if (!favoritePokemon.includes(button.id)) {
    favoritePokemon.push(button.id);
  }
  button.classList.toggle("pokemon-box__star-button--active");
  localStorage.favoritePokemon = JSON.stringify(favoritePokemon);
};

export default handleFavoritePkmn;
