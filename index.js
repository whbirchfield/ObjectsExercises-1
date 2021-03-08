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
  move: function() { return (Math.floor(Math.random() * 11)) }
};

let crewArray = [superChimpOne, salamander, superChimpTwo, superCanine, superInsect];

for (item in superChimpOne) {
  console.log(item + ", " + superChimpOne[item]);
}

console.log('\n');
for (item in salamander) {
  console.log(item + ", " + salamander[item]);
}
console.log('\n')

function crewReports(animalObjects) {
  let i =0;
  let animalLines ='';
  while (i < animalObjects.length) {
    animalLines += (`${animalObjects[i].name} is a ${animalObjects[i].species}. They are ${animalObjects[i].age} years old and ${animalObjects[i].mass} kilograms. Their ID is ${animalObjects[i].astronautID}.\n`);
    i++;
  }
  return animalLines;
}


function fitnessTest (fitnessCrewArray){

  let i =0;
  let fitnessLines = '';
  while (i<fitnessCrewArray.length){
    let turns = 0;
    for (stepsTaken = 0; stepsTaken<20 ; turns ++){
     stepsTaken += (fitnessCrewArray[i].move());
   }
   fitnessLines += (`${fitnessCrewArray[i].name} took ${turns} turns to take 20 steps.\n`);
    i++;
   } return fitnessLines;
 }


/*
function fitnessTest (candidates){
  let results = [] numSteps, turns;
  for (let i = 0; i< candidates.length, i++){
    numSteps = 0;
    turns = 0;
  }
} */
// After you have created the other object literals, add the astronautID property to each one.
// Create an array to hold the animal objects.

// Print out the relevant information about each animal.
console.log(crewReports(crewArray));
// Start an animal race!
console.log(fitnessTest(crewArray));
