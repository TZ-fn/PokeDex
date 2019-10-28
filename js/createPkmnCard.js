import {
  getPokemonEvolutions
} from './getPokemonEvolutions.js';

export const createPkmnCard = pokemon => {
  return getPokemonEvolutions(pokemon.id, pokemon.name)
    .then(evolutions => {
      const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);
      //filter is needed, because Pokemons can have 1 or 2 types, span is added to change type-badge appearance
      const extractPkmnTypes = pokemon => {
        let types = pokemon.types.filter(type => type !== undefined);
        return `${types.map(typeSlot => `<span class="pokemon-box__type-badge pokemon-box__type-badge-${typeSlot.type.name}">${typeSlot.type.name.toUpperCase()}</span>`).join(' ')}`;
      };
      return `<div class="pokemon-box">
        <button class="pokemon-box__star-button" aria-label="Add this Pokemon to favorites." id="${pokemon.name}">
          <svg viewBox="-2 -2 55 51" aria-hidden="true" class="pokemon-box__star">
            <path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" stroke="white" stroke-width="3"/>
          </svg>
        </button>
        <img src="${pokemon.sprites.front_default}" alt="${capitalize(pokemon.name)}'s picture" class="pokemon-box__image">
        <p class="pokemon-box__name">${capitalize(pokemon.name)}</p>
        <p class="pokemon-box__number">#${pokemon.id}</p>
        <p class="pokemon-box__type">${extractPkmnTypes(pokemon)}</p>
        <div class="pokemon-box__evolutions">Evolutions: ${evolutions}</div>
        <div class="pokemon-box__stats"><canvas id="${pokemon.name}-stats"></canvas></div>
        </div>
        `;
    });
};