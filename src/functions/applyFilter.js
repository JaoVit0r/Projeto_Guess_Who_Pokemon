export default function applyFilter(
    valorDoSelect,
    tipoDoSelect,
    sortedPokemon,
    pokemonList,
    setPokemonList,
    appliedFilters,
    setAppliedFilters,
    noQuestions,
    setNoQuestions
  ) {
    setNoQuestions(noQuestions + 1);
    switch (tipoDoSelect) {
      case "color":
        if (sortedPokemon[0].color === valorDoSelect) {
          setPokemonList(
            pokemonList.filter(
              (pokemon) => pokemon.color === sortedPokemon[0].color
            )
          );
          const res = { attr: valorDoSelect, correct: true };
          setAppliedFilters([res, ...appliedFilters]);
        } else {
          setPokemonList(
            pokemonList.filter((pokemon) => pokemon.color !== valorDoSelect)
          );
          const res = { attr: valorDoSelect, correct: false };
          setAppliedFilters([res, ...appliedFilters]);
        }
        break;
  
      case "habitat":
        if (sortedPokemon[0].habitat === valorDoSelect) {
          setPokemonList(
            pokemonList.filter(
              (pokemon) => pokemon.habitat === sortedPokemon[0].habitat
            )
          );
          const res = { attr: valorDoSelect, correct: true };
          setAppliedFilters([res, ...appliedFilters]);
        } else {
          setPokemonList(
            pokemonList.filter((pokemon) => pokemon.habitat !== valorDoSelect)
          );
          const res = { attr: valorDoSelect, correct: false };
          setAppliedFilters([res, ...appliedFilters]);
        }
        break;
  
      case "generation":
        if (sortedPokemon[0].generation === valorDoSelect) {
          setPokemonList(
            pokemonList.filter(
              (pokemon) => pokemon.generation === sortedPokemon[0].generation
            )
          );
          const res = { attr: valorDoSelect, correct: true };
          setAppliedFilters([res, ...appliedFilters]);
        } else {
          setPokemonList(
            pokemonList.filter((pokemon) => pokemon.generation !== valorDoSelect)
          );
          const res = { attr: valorDoSelect, correct: false };
          setAppliedFilters([res, ...appliedFilters]);
        }
        break;
  
      case "shape":
        if (sortedPokemon[0].shape === valorDoSelect) {
          setPokemonList(
            pokemonList.filter(
              (pokemon) => pokemon.shape === sortedPokemon[0].shape
            )
          );
          const res = { attr: valorDoSelect, correct: true };
          setAppliedFilters([res, ...appliedFilters]);
        } else {
          setPokemonList(
            pokemonList.filter((pokemon) => pokemon.shape !== valorDoSelect)
          );
          const res = { attr: valorDoSelect, correct: false };
          setAppliedFilters([res, ...appliedFilters]);
        }
        break;
  
      case "isLegendary":
        const isLegendary = valorDoSelect === "true" ? true : false;
        if (sortedPokemon[0].isLegendary === isLegendary) {
          setPokemonList(
            pokemonList.filter((pokemon) => pokemon.isLegendary === isLegendary)
          );
          const res = { attr: valorDoSelect, correct: true };
          setAppliedFilters([res, ...appliedFilters]);
        } else {
          setPokemonList(
            pokemonList.filter((pokemon) => pokemon.isLegendary !== isLegendary)
          );
          const res = { attr: valorDoSelect, correct: false };
          setAppliedFilters([res, ...appliedFilters]);
        }
        break;
  
      case "types":
        if (sortedPokemon[0].types.includes(valorDoSelect)) {
          setPokemonList(
            pokemonList.filter((pokemon) => pokemon.types.includes(valorDoSelect))
          );
          const res = { attr: valorDoSelect, correct: true };
          setAppliedFilters([res, ...appliedFilters]);
        } else {
          setPokemonList(
            pokemonList.filter(
              (pokemon) => !pokemon.types.includes(valorDoSelect)
            )
          );
          const res = { attr: valorDoSelect, correct: false };
          setAppliedFilters([res, ...appliedFilters]);
        }
        break;
  
      default:
        console.log("Erro ao aplicar filtro!");
    }
  }
  