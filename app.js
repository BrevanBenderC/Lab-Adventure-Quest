import { generatePlayer, savePlayer } from './utils.js';
const playerForm = document.getElementById('userInput');

playerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(playerForm);
    // use the form data object to make a user
    const user = generatePlayer(formData);

    // pop that user in local storage
    savePlayer(user);

    // redirect us to the map page
    window.location = 'map';
});