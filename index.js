let superChimpOne = {
  name: "Chad",
  species: "Chimpanzee",
  mass: 9,
  age: 6,
  astronautID: 1,
  move: function() { return Math.floor(Math.random() * 11) }
};

let salamander = {
  name: "Lacey",
  species: "Axolotl Salamander",
  mass: 0.1,
  age: 5,
  astronautID: 2,
  move: function() { return Math.floor(Math.random() * 11) }
};

let superChimpTwo = {
  name: "Brad",
  species: "Chimpanzee",
  mass: 11,
  age: 6,
  astronautID: 10,
  move: function() { return Math.floor(Math.random() * 11) }
};

let superCanine = {
  name: "Leroy",
  species: "Beagle",
  mass: 14,
  age: 5,
  astronautID: 3,
  move: function() { return Math.floor(Math.random() * 11) }
};

let superInsect = {
  name: "Almina",
  species: "Tardigrade",
  mass: 0.0000000001,
  age: 1,
  astronautID: 4,
  move: function() {return (Math.floor(Math.random()*11))}
};

let crew = [{name: "Chad",
  species: "Chimpanzee",
  mass: 9,
  age: 6,
  astronautID: 1,
  move: function() { return Math.floor(Math.random() * 11) }}, {name: "Lacey",
  species: "Axolotl Salamander",
  mass: 0.1,
  age: 5,
  astronautID: 2,
  move: function() { return Math.floor(Math.random() * 11) }},{name: "Brad",
  species: "Chimpanzee",
  mass: 11,
  age: 6,
  astronautID: 10,
  move: function() { return Math.floor(Math.random() * 11) }}, {name: "Leroy",
  species: "Beagle",
  mass: 14,
  age: 5,
  astronautID: 3,
  move: function() { return Math.floor(Math.random() * 11) }}, {name: "Almina",
  species: "Tardigrade",
  mass: 0.0000000001,
  age: 1,
  astronautID: 4,
  move: function() { return Math.floor(Math.random()*11)}}];

let testCrew = ['superChimpOne', 'superChimpTwo']

for (item in superChimpOne) {
  console.log(item + ", " + superChimpOne[item]);
}

console.log('\n');
for (item in salamander) {
  console.log(item + ", " + salamander[item]);
}
console.log('\n')

function crewReports(animalObjects){
  let sentence = `${animalObjects.name} is a ${animalObjects.species}. They are ${animalObjects.age} years old and ${animalObjects.mass} kilograms. Their ID is ${animalObjects.astronautID}.\n`
 return sentence;
}

function fitnessTest (candidates){
  lets results = [] numSteps, turns;
  for (let i = 0; i< candidates.length, i++){
    numSteps = 0;
    turns = 0;
  }
}
// After you have created the other object literals, add the astronautID property to each one.
// Create an array to hold the animal objects.

// Print out the relevant information about each animal.
console.log(crewReports(superChimpOne));
// Start an animal race!
console.log(superChimpOne.move())

//console.log(animalObjects);