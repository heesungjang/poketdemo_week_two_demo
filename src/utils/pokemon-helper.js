export const getTypeIconSrc = (type) => `./images/types-icons/${type}.svg`;

/**
 * 포켓몬 데이터 객체를 포맷합니다.
 *
 * @param {Object} pokemon
 * @param {number} pokemon.id - 포켓몬의 ID입니다.
 * @param {string} pokemon.name - 포켓몬의 이름입니다.
 * @param {Object} pokemon.sprites - 포켓몬의 이미지 URL을 포함하는 스프라이트 객체입니다.
 * @param {number} pokemon.weight - 포켓몬의 무게입니다.
 * @param {number} pokemon.height -  포켓몬의 키입니다.
 * @param {Array} pokemon.types - 포켓몬의 타입을 포함하는 타입 배열입니다.
 * @returns {Object} -  포맷된 포켓몬 데이터 객체입니다.
 */
export const formatPokemonData = (pokemon) => {
  const { id, name, sprites, weight, height, types } = pokemon;

  const weightInKg = weight / 10 + 'kg';
  const heightInMeter = height / 10 + 'm';
  const paddedId = String(id).padStart(3, '0');
  const formattedTypes = types.map(({ type }) => type);
  const pokemonImg =
    sprites.other.dream_world.front_default ||
    sprites.other['official-artwork'].front_default;

  return {
    ...pokemon,
    paddedId,
    weight: weightInKg,
    imgSrc: pokemonImg,
    height: heightInMeter,
    types: formattedTypes,
    name: removeHyphens(name),
  };
};

const removeHyphens = (string) => {
  return string.replace(/-/g, ' ');
};
