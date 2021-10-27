import { generatePlayer, savePlayer } from './utils.js';
const playerForm = document.getElementById('userInput');

playerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(playerForm);
    const user = generatePlayer(formData);
    savePlayer(user);
    window.location = 'map';
});