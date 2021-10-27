import { generatePlayer, savePlayer, getUser, scoreQuest, hasCompletedAllQuests } from '../utils.js';
const test = QUnit.test;

test('generatePlayer returns object', (expect) => {
 
    const expected = { 
        completed: {},
        gold: 0,
        hp: 100,
        name: 'Player',
        class: 'warrior',
    };

    const formData = new FormData();
    formData.set('name', 'Player');
    formData.set('class', 'warrior');

    const actual = generatePlayer(formData);


    expect.deepEqual(actual, expected);
});

test('savePlayer puts object in local storage', (expect)=>{
    localStorage.removeItem('PLAYER');
    const userObject = { 
        completed: {},
        gold: 0,
        hp: 100,
        name: 'Player',
        class: 'warrior',
    };

    savePlayer(userObject);
    const actual = JSON.parse(localStorage.getItem('PLAYER'));

    expect.deepEqual(actual, userObject);

});

test('getUser should return the user object from localStorage', (expect)=>{
    const userObject = { 
        completed: {},
        gold: 0,
        hp: 35,
        name: 'julie',
        race: 'cleric',
    };

    savePlayer(userObject);
    const actual = getUser();
    expect.deepEqual(actual, userObject);

});

test('scoreQuest should update gold, hp and completed on the userObject', (expect)=>{
    const userObject = { 
        completed: {},
        gold: 0,
        hp: 35,
        name: 'julie',
        race: 'cleric',
    };
    const choiceObject = {
        id: 'run',
        description: 'Get the hell out of the village',
        result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 gold.
            Unluckily, you trip over a discarded wagon wheel on your
            way out of town and take 40 hp damage. 
        `,
        hp: -35,
        gold: 15
    };
    const questId = 'dragon';

    scoreQuest(choiceObject, questId, userObject);
    expect.equal(userObject.hp, 0);
    expect.equal(userObject.gold, 15);
    expect.equal(userObject.completed[questId], true);

});

test('hasCompletedAllQuests returns true if the user has completed all quests', (expect)=>{
    const userObject = {
        completed: { dragon: true, treasure: true, monsters: true },
    };

    const actual = hasCompletedAllQuests(userObject);
    expect.equal(actual, true);
});

test('hasCompletedAllQuests returns false if the user has not completed all quests', (expect)=>{
    const userObject = {
        completed: { treasure: true, monsters: true },
    };

    const actual = hasCompletedAllQuests(userObject);
    expect.equal(actual, false);
});