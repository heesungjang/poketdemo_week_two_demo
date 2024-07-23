import { useEffect, useState } from 'react';
// import usePokemons from '../hooks/usePokemons';
import PokemonCard from './PokemonCard';
import { formatPokemonData } from '../utils/pokemon-helper';
import Loader from './Loader';

const PokemonsContainer = ({ type }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      const API_END_POINT = `https://pokeapi.co/api/v2/type/${type}`;

      const res = await fetch(API_END_POINT);

      const { pokemon: pokemonList } = await res.json();

      const pokemons = await Promise.all(
        pokemonList.map(async ({ pokemon }) => {
          const res = await fetch(pokemon.url);
          const data = await res.json();

          return formatPokemonData(data);
        })
      );

      setLoading(false);
      return setPokemons(pokemons);
    };

    fetchPokemons();
  }, [type]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='pokemons-container'>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonsContainer;
