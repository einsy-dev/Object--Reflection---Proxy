/* eslint-disable linebreak-style */
export default function attack(character, num) {
  const {
    id, name, icon, description = 'Описание недоступно',
  } = character.special[num];
  return {
    id, name, icon, description,
  };
}
