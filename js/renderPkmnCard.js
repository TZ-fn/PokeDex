import {
  getPokemonEvolutions
} from './getPokemonEvolutions.js';

export const renderPkmnCard = pokemon => {
  return getPokemonEvolutions(pokemon.id)
    .then(evolutions => {
      console.log(evolutions)
      const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);
      //filter is needed, because Pokemons can have 1 or 2 types, span is added to change type-badge appearance
      const extractPkmnTypes = pokemon => {
        let types = pokemon.types.filter(type => type !== undefined);
        return `${types.map(typeSlot => `<span class="pokemon-box__type-badge pokemon-box__type-badge-${typeSlot.type.name}">${typeSlot.type.name.toUpperCase()}</span>`).join(' ')}`;
      };
      return `<div class="pokemon-box">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="-10 -10 50 50" class="pokemon-box__star">
          <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" stroke="white" stroke-width="2"/>
        </svg>
        <img src="${pokemon.sprites.front_default}" alt="${capitalize(pokemon.name)}'s picture" class="pokemon-box__image">
        <p class="pokemon-box__name">${capitalize(pokemon.name)}</p>
        <p class="pokemon-box__number">#${pokemon.id}</p>
        <p class="pokemon-box__type">${extractPkmnTypes(pokemon)}</p>
        <div class="pokemon-box__evolutions">Evolutions: ${evolutions}</div>
        <div class="pokemon-box__stats">Stats-box</div>
        </div>
        `;
    })

};