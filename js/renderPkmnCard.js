export const renderPkmnCard = (pokemon) => {

  const extractPkmnTypes = pokemon => {
    let types = pokemon.types.filter(type => type !== undefined);
    return `${types.map(typeSlot => `<span class="pokemon-box__type-${typeSlot.type.name}"> ${typeSlot.type.name.toUpperCase()}</span>`)}`;
  };

  return `<div class="pokemon-box">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="-10 -10 50 50" class="pokemon-box__star">
          <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" stroke="white" stroke-width="2"/>
        </svg>
        <img src="${pokemon.sprites.front_default}" alt = "${pokemon.name}'s picture" class="pokemon-box__image">
        <p class="pokemon-box__name">${pokemon.name}</p>
        <p class="pokemon-box__number">#${pokemon.id}</p>
        <p class="pokemon-box__type"> Types: ${extractPkmnTypes(pokemon)}</p>
        <div class="pokemon-box__evolutions">${'lorem'}</div>
        <div class="pokemon-box__stats">${'lorem'}</div>
        </div>
        `;
};