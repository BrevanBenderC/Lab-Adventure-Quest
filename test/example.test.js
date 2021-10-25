import { generatePlayer } from '../utils.js';

const test = QUnit.test;

test('generatePlayer creates character from user input', (expect) => {
    const samplePlayer = {
        completed: {},
        gold: 0,
        hp: 100,
        name: 'Player',
        class: 'warrior'
    };
    const formData = new FormData();
    formData.set('class', 'warrior');
    formData.set('name', 'Player');
    
    const actual = generatePlayer(formData);
    expect.deepEqual(actual, samplePlayer);
})