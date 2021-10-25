import { generatePlayer, savePlayer } from './utils.js';
const playerForm = document.getElementById('userInput');
playerForm.addEventListener('submit', (e)=>{
    e.preventDefault;
    const formData = new FormData(playerForm);
    const playerObj = generatePlayer(formData);
    savePlayer(playerObj);
    window.location.replace('./Map');
});