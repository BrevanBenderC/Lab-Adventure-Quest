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