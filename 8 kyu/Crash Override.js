/* Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

Your task is to create a function that, given a proper first and last name, will return the correct alias.

    I have created two objects that return a one word name in response to the first letter of your first name and one for the first letter of your surname.

    If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

    Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.' */

///////////////////// Solution //////////////////////

function aliasGen(name, surName){
    return firstName[name[0].toUpperCase()] === undefined || surname[surName[0].toUpperCase()] === undefined ? 
    'Your name must start with a letter from A - Z.' : 
    `${firstName[name[0].toUpperCase()]} ${surname[surName[0].toUpperCase()]}`
}