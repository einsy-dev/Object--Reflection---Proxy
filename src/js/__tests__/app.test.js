/* eslint-disable linebreak-style */
import orderByProps from '../app';

describe('Проверка сортировки', () => {
  test('should ', () => {
    const obj = {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    expect(orderByProps(obj, ['name', 'level'])).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ]);
  });
  test('should ', () => {
    const obj = {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    expect(orderByProps(obj, ['attack', 'level'])).toEqual([
      { key: 'attack', value: 80 },
      { key: 'level', value: 2 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'name', value: 'мечник' },
    ]);
  });
});
