//import { loadProfile } from '../utils.js';
import { getUser } from '../utils.js';
import { hpMessages, goldMessages, scoreGold, scoreHp } from './endgameFun.js';


const user = getUser();
console.log(user);
const storyDisplay = document.getElementById('story-display');

const hpResult = scoreHp(user.hp);
const goldResult = scoreGold(user.gold);
const hpMessage = hpMessages[hpResult];


const goldMessage = goldMessages[goldResult];

let story = 'After your adventures, ';
story += user.name + ' the ' + user.class + ', ';
story += hpMessage + ' and ' + goldMessage + '.';
console.log(story);
storyDisplay.textContent = story;