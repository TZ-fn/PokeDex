export const handleFavoritePkmns = button => {
  const favoritePokemons = JSON.parse(localStorage.favoritePokemons);
  if (favoritePokemons.includes(button.id)) {
    favoritePokemons.splice(favoritePokemons.indexOf(button.id), 1);
  } else if (!favoritePokemons.includes(button.id)) {
    favoritePokemons.push(button.id);
  }
  button.classList.toggle('pokemon-box__star-button--active');
  localStorage.favoritePokemons = JSON.stringify(favoritePokemons);
};