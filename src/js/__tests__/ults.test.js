/* eslint-disable linebreak-style */
/* eslint-disable indent */

import attack from '../ults';

describe('Тесты аттак', () => {
    test('should ', () => {
        const character = {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
            special: [
                {
                    id: 8,
                    name: 'Двойной выстрел',
                    icon: 'http://...',
                    description: 'Двойной выстрел наносит двойной урон',
                },
                {
                    id: 9,
                    name: 'Нокаутирующий удар',
                    icon: 'http://...',
                    // <- обратите внимание, описание "засекречено"
                },
            ],
        };

        expect(attack(character, 1)).toEqual(
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...',
                description: 'Описание недоступно',
            },
        );
    });
});
