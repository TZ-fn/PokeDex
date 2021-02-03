import getPokemonEvolutions from './getPokemonEvolutions.js';

import { isPkmnInFavorites } from './helperFunctions.js';

const createPkmnCard = (pokemon, isInModal) => {
  return getPokemonEvolutions(pokemon.id, pokemon.name, isInModal).then(
    (evolutions) => {
      const capitalize = (string) =>
        string.charAt(0).toUpperCase() + string.slice(1);
      //filter is needed, because Pokemon can have 1 or 2 types, span is added to change type-badge appearance
      const extractPkmnTypes = (pokemon) => {
        let types = pokemon.types.filter((type) => type !== undefined);
        return `${types
          .map(
            (typeSlot) =>
              `<span class="pokemon-box__type-badge pokemon-box__type-badge-${
                typeSlot.type.name
              }">${typeSlot.type.name.toUpperCase()}</span>`
          )
          .join(' ')}`;
      };
      return `
        ${isInModal ? '<div class="pokemon-modal" id="pkmnModal">' : ''}

          <div class="${isInModal ? 'pokemon-modal__content' : 'pokemon-box'} ${pokemon.id}" id="pkmnModalContent">

          ${isInModal ? '<button class="pokemon-modal__close-button" id="pkmnModalCloseBtn" aria-label="Close this modal window."><span aria-hidden="true">×</span></button>' : ''}

          <button class="pokemon-box__star-button${isPkmnInFavorites(pokemon.name) ? ' pokemon-box__star-button--active' : ''}" aria-label="Add this Pokemon to favorites." title="Add to favorites." id="${pokemon.name}">

            <svg viewBox="-2 -2 55 51" class="pokemon-box__star" aria-hidden="true" >
              <path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" stroke="white" stroke-width="3"/>
            </svg>

          </button>

          <div class='pokemon-box__image-container'>
          <img src="${pokemon.sprites.front_default}" alt="${capitalize(pokemon.name)}'s picture" class="pokemon-${isInModal ? 'modal' : 'box'}__image">
          </div>

          <p class="pokemon-box__name">${capitalize(pokemon.name)}</p>
          <p class="pokemon-box__number">#${pokemon.id}</p>
          <p class="pokemon-box__type">${extractPkmnTypes(pokemon)}</p>
          <div class="pokemon-${isInModal ? 'modal' : 'box'}__evolutions">Evolutions: ${evolutions}</div>
          <div class="pokemon-box__stats">
            <canvas id="${pokemon.name}${isInModal ? '-modal' : ''}-stats">
            </canvas>
          </div>
          </div>
          
        ${isInModal ? '</div>' : ''}
      `;
    }
  );
};

export default createPkmnCard;