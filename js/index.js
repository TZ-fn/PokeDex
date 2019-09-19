window.onload = () => {

  const randomPokemonBtn = document.querySelector('#rndPkmnBtn');
  const tenRndmPokemonBtn = document.querySelector('#tenRndmPkmBtn');
  const randomPokemonNumber = () => Math.floor(Math.random() * (808 - 1)) + 1;

  const getPokemon = (pokemonNumber, howManyOfPokemons) => {
    for (let i = 0; i < howManyOfPokemons; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber()}/`)
        .then(result => result.json())
        .then(result => console.log(result.name, result.order));
    }
  };

  randomPokemonBtn.addEventListener('click', () => {
    getPokemon(randomPokemonNumber, 1);
  });

  tenRndmPokemonBtn.addEventListener('click', () => {
    getPokemon(randomPokemonNumber, 10);
  });
};