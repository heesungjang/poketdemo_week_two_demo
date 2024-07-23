import { useEffect, useState } from 'react';
import { getTypeIconSrc } from '../utils/pokemon-helper';

const TypesBar = ({ toggleType }) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      const API_END_POINT = `https://pokeapi.co/api/v2/type/`;
      const res = await fetch(API_END_POINT);

      const { results } = await res.json();

      setTypes(
        results.filter(
          ({ name }) =>
            name !== 'unknown' && name !== 'shadow' && name !== 'stellar'
        )
      );
    };

    fetchTypes();
  }, []);

  return (
    <nav className='types-bar'>
      {types.map(({ name }) => {
        const typeImg = getTypeIconSrc(name);

        return (
          <a key={name} className={name} onClick={() => toggleType(name)}>
            <img src={typeImg} alt={name} />
          </a>
        );
      })}
    </nav>
  );
};

export default TypesBar;
