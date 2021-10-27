import quests from './data/questData.js';

export function generatePlayer(formData){
    return {
        completed: {},
        gold: 0,
        hp: 100,
        name: formData.get('name'),
        class: formData.get('class'),
    };
}
export function savePlayer(userObject){
    const playerString = JSON.stringify(userObject);
    localStorage.setItem('PLAYER', playerString);
}
export function findById(array, id) {
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        if (item.id === id) {
            return item;
        }
    }
}
export function getUser() {
    const player = localStorage.getItem('PLAYER');
    if (!player) return null;
    const user = JSON.parse(player);
    return user;
}
/*export function getUser(){
    const userString = localStorage.getItem('PLAYER');
    return JSON.parse(userString);
}*/
export function loadProfile() {
    const name = document.getElementById('name');
    const hp = document.getElementById('hp');
    const gold = document.getElementById('gold');
    const user = getUser();
    if (!user) {
        window.location = './';
    }
    name.textContent = user.name;
    gold.textContent = user.gold;
    if (isDead(user)) {
        hp.textContent = 'Cannot Go On';
    }
    else {
        hp.textContent = user.hp;
    }

}
export function scoreQuest(choiceObject, questId, userObject){
    userObject.hp += choiceObject.hp;
    userObject.gold += choiceObject.gold;
    userObject.completed[questId] = true;}

export function isDead(user) {
    return user.hp <= 0;
}
export default isDead;

export function hasCompletedAllQuests(userObject){
    for (let quest of quests){
        if (!userObject.completed[quest.id]){
            return false;
        }
    }
    return true;
}