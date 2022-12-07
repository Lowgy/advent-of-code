const { readFileSync, promises: fsPromises } = require('fs');

let instructions = readFileSync('day5Data.txt', 'utf8').toString();

let instructionsArray = instructions.split('\n');

const stackContainer = [
  ['D', 'M', 'S', 'Z', 'R', 'F', 'W', 'N'],
  ['W', 'P', 'Q', 'G', 'S'],
  ['W', 'R', 'V', 'Q', 'F', 'N', 'J', 'C'],
  ['F', 'Z', 'P', 'C', 'G', 'D', 'L'],
  ['T', 'P', 'S'],
  ['H', 'D', 'F', 'W', 'R', 'L'],
  ['Z', 'N', 'D', 'C'],
  ['W', 'N', 'R', 'F', 'V', 'S', 'J', 'Q'],
  ['R', 'M', 'S', 'G', 'Z', 'W', 'V'],
];

const readInstructions = ([count, from, to]) => {
  let accumulator = [];
  for (let i = 0; i < count; i++) {
    let poppedItem = stackContainer[from - 1].pop();
    accumulator.push(poppedItem);
  }
  // accumulator.reverse(); // Part 2
  stackContainer[to - 1] = [...stackContainer[to - 1], ...accumulator];
};

for (let i in instructionsArray) {
  let set = instructionsArray[i]
    .replace('move', '')
    .replace('from', ',')
    .replace('to', ',');
  readInstructions(set.split(',').map(Number));
}

for (let i in stackContainer) {
  console.log(stackContainer[i].at(-1));
}
