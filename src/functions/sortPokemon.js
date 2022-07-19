import randomIntFromInterval from "./random";

function sortPokemon(pokemon) {
  const sortedId = randomIntFromInterval(1, pokemon.length);
  const sortedPokemon = pokemon.filter((_, idx) => idx === sortedId);
  return sortedPokemon;
}

export default sortPokemon;
