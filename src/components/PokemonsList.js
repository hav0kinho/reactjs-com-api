import './PokemonsList.css';
import {useState, useEffect} from 'react';

const PokemonsList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [nextList, setNextList] = useState("");
    const [previousList, setPreviousList] = useState("");

    let num = 1;

    const fetchApiPokemons = async (url) => {
        const res = await fetch(url);
        const json = await res.json();

        setPokemons(json.results);
        setNextList(json.next);
        setPreviousList(json.previous);
    }

    const atualizarListaPokemons = (exibirProxima) => {
        const proximaLista = nextList;
        const listaAnterior = previousList;

        if(exibirProxima){
            zerarListas();
            fetchApiPokemons(nextList);
        } else {
            if(previousList != null){
                zerarListas();
                fetchApiPokemons(previousList);
            } else {
                console.log("Não tem anteior");
            }

        }

    }

    const zerarListas = () => {
        setPokemons([]);
        setNextList("");
        setPreviousList("");
    }

    useEffect(() => {
        fetchApiPokemons("https://pokeapi.co/api/v2/pokemon/");
    }, [])



    return (
        <main>
            <section>
                <ul>
                {pokemons.map((pokemon) => (
                        <li key={num}>
                            <div className='pokemon-list-div'>
                                {num++}: <a href={pokemon.url} className='pokemon-name' target="_blank">{pokemon.name.toUpperCase()}</a>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className='div-botoes'>
                    <button onClick={() => atualizarListaPokemons(false)}>Anterior</button>
                    <button onClick={() => atualizarListaPokemons(true)}>Proximo</button>
                    
                </div>
            </section>
        </main>
    )
}

export default PokemonsList