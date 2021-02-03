const getPokemonStats = (pokemonStats) => {
  const stats = [];
  //reorder the stats so they are sorted accordingly to the graph axes
  stats[0] = pokemonStats[5].base_stat;
  stats[1] = pokemonStats[3].base_stat;
  stats[2] = pokemonStats[1].base_stat;
  stats[3] = pokemonStats[0].base_stat;
  stats[4] = pokemonStats[2].base_stat;
  stats[5] = pokemonStats[4].base_stat;
  return stats;
};

export default getPokemonStats;
