// Creating data objects

const people = ['Jerry Seinfeld', 'Rick James', 'Emilio Estevez', 'George Washington', 'Jair Bolsonaro', 'Zayne', 'Harry Style\'s stylist', 'Fidel Castro', 'Richard Nixon', 'Mac Dre', 'Tom Brady', 'Barry Bonds']

const places =['Albequerque, New Mexico', 'Buenos Aires, Argentina', 'Mallorca, Spain', 'Guayabo National Monument, Costa Rica', 'Seattle, Washington, USA', 'Newark, Delaware, USA', 'Taipei, Taiwan']

const foods = ['hard boiled eggs', 'plain, non-fat greek yogurt', 'bangers and mash', '300 mandarin oranges', 'fried plantains', 'an extra large order of McDonald\'s french fries', 'the delicious soft serve ice cream from Milanga & Co', 'a fully stuffed arepa']


const messageFormats = ["I just saw ${person} in ${place} eating ${food}!", "Did you know that at this very moment in ${place}, ${person} is eating ${food}? It's true. Trust me, I'm a doctor.", "In my wildest dreams I would never expect to see ${food} being eaten by ${person} in ${place}, but I can't deny reality."]


// Helper functions

// found a module that uses RegEx to fill in vars that are declared as part of the normal string
const fillTemplate = require('es6-dynamic-template');

const selectRandom = list => list[Math.floor(Math.random() * list.length)];

const combineWords = () => {
  let person = selectRandom(people);
  let place = selectRandom(places);
  let food = selectRandom(foods);
  let format = selectRandom(messageFormats);

  let message = fillTemplate(format, 
    {
    person: person,
    place: place,
    food: food
    });


  return message;
}

console.log(combineWords());

