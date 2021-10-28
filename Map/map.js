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
console.log(user);
function displayLink(quest){
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;
    a.classList.add('quest');
    questLink.appendChild(a);
    a.style.top = quest.map.top;
    a.style.left = quest.map.left;
}

function displaySpan(quest){
    const span = document.createElement('span');
    span.textContent = quest.title;
    span.classList.add('quest');
    questLink.appendChild(span);
    span.style.left = quest.map.left;
    span.style.top = quest.map.left;
}