import quests from '../data/questData.js';
import { getUser, hasCompletedAllQuests } from '../utils.js';
const questLink = document.getElementById('questLinks');
const user = getUser();

if (user.hp <= 0 || hasCompletedAllQuests(user)){
    window.location.replace('../gameover');
}
for (let quest of quests){
   
    if (user.completed[quest.id]){
        displaySpan(quest);
    } else {

        displayLink(quest);
    }
}

function displayLink(quest){
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;
    questLink.appendChild(a);
}

function displaySpan(quest){
    const span = document.createElement('span');
    span.textContent = quest.title;

    questLink.appendChild(span);
}