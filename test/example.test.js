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
        hp: 100,
        name: 'Player',
        race: 'warrior',
    };

    savePlayer(userObject);
    const actual = getUser();
    expect.deepEqual(actual, userObject);

});

test('scoreQuest should update gold, hp and completed on the userObject', (expect)=>{
    const userObject = { 
        completed: {},
        gold: 0,
        hp: 100,
        name: 'Player',
        race: 'warrior',
    };
    const choiceObject = {
        id: 'negotiate',
        description: 'Try to Charm Your Way Out',
        result: `
        You make conversation with the disgusting little grunts and bond over a mutual hatred of vegetables. After sharing a meal they send you on your way with some extra supplies.
        `,
        hp: 0,
        gold: 45
    };
    const questId = 'goblins';

    scoreQuest(choiceObject, questId, userObject);
    expect.equal(userObject.hp, 100);
    expect.equal(userObject.gold, 45);
    expect.equal(userObject.completed[questId], true);

});

test('hasCompletedAllQuests returns true if the user has completed all quests', (expect)=>{
    const userObject = {
        completed: { goblins: true, werewolf: true, fork: true },
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