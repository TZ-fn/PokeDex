export const getPokemonStats = pokemonStats => {
  const stats = [];
  //reorder the stats so they are sorted accordingly to the graph legend
  stats[0] = pokemonStats[5].base_stat;
  stats[1] = pokemonStats[2].base_stat;
  stats[2] = pokemonStats[4].base_stat;
  stats[3] = pokemonStats[1].base_stat;
  stats[4] = pokemonStats[5].base_stat;
  stats[5] = pokemonStats[0].base_stat;
  return stats;
};