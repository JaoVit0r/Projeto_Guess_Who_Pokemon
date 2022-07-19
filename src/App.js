import "./styles/globals.css";
import "./styles/app.css";
import "./styles.css";
import DisplayCard from "./components/DisplayCard";
import OptionGroup from "./components/OptionGroup";
import pokemon from "./db/pokemon1_3.json";
import filters from "./db/filters.json";
import { useState } from "react";
import sortPokemon from "./functions/sortPokemon";
import convertObjtoArrayObj from "./functions/convertObjToArrayObj";
import checkAttribute from "./functions/checkAttribute";
import applyFilter from "./functions/applyFilter";
import getAttrStyle from "./functions/getAttrStyle";

let sortedPokemon = sortPokemon(pokemon);
export default function App() {
  const [appliedFilters, setAppliedFilters] = useState([]);
  const [noQuestions, setNoQuestions] = useState(0);
  const [pokemonList, setPokemonList] = useState(pokemon);
  const [valorDoSelect, setValorDoSelect] = useState("grass");
  const [tipoDoSelect, setTipoDoSelect] = useState("types");
  const parsedFilters = convertObjtoArrayObj(filters);
  const handleOnChange = (e) => {
    setValorDoSelect(e.target.value);
    setTipoDoSelect(checkAttribute(e.target.value));
  };

  const applySelectedFilter = (e) => {
    applyFilter(
      valorDoSelect,
      tipoDoSelect,
      sortedPokemon,
      pokemonList,
      setPokemonList,
      appliedFilters,
      setAppliedFilters,
      noQuestions,
      setNoQuestions
    );
  };

  const Restart = () => {
    setPokemonList(pokemon);
    setAppliedFilters([]);
    setNoQuestions(0);
    sortedPokemon = sortPokemon(pokemon);
  };

  return (
    <>
      <main>
        <aside className="question-section">
          <button onClick={Restart} className="filled-button">
            RESTART
          </button>
          <div className="guess-who">
            <h1>?</h1>
            <div className="guess-who__spans">
              <spam>Who's that</spam>
              <spam>Pokemon!</spam>
            </div>
          </div>
          <h2>Does the Pokemon have:</h2>
          <select value={valorDoSelect} onChange={handleOnChange}>
            {parsedFilters.map((key) => (
              <OptionGroup
                chave={Object.keys(key)[0]}
                valores={Object.values(key)[0]}
              />
            ))}
          </select>
          <button className="filled-button" onClick={applySelectedFilter}>
            FIND OUT
          </button>
          <div className="menu-below">
            <div>Pokemons left: {pokemonList.length}</div>
            <div>Questions asked: {noQuestions}</div>
            <span>Question history:</span>
            <ul className="respostas">
              {appliedFilters.map((item) => (
                <li style={getAttrStyle(item.correct)}>{item.attr}</li>
              ))}
            </ul>
            <div></div>
          </div>
        </aside>
        <section className="board-wrapper">
          <DisplayCard
            data={pokemonList}
            sortedPokemon={sortedPokemon}
            restart={Restart}
          />
          {/* {listaPokemons.map((pokemon) => (
							<div className="card">
								<img src={pokemon.sprite}></img>
								<p className="card-p">{pokemon.name}</p>
								<div class="card">
									<p>${pokemon.name}</p>
									<div class="guess">
										<span>Guess on {pokemon.name}?</span>
										<button class="filled-button small">
											Guess
										</button>
									</div>
								</div>
							</div>
						))} */}
        </section>
      </main>
    </>
  );
}
