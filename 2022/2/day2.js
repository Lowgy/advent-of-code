const { readFileSync, promises: fsPromises } = require('fs');

let rock = 1;
let paper = 2;
let scissors = 3;

let totalScore = 0;
let win = 6;
let lose = 0;
let draw = 3;

let strategy = '';

async function asyncReadFile(filename) {
  try {
    const data = await fsPromises.readFile(filename, 'utf8');
    const arr = data.split(/\r?\n/);
    strategy = arr.map((item) => item.split(' '));
    console.log(strategy);
    return strategy;
  } catch (err) {
    console.error(err);
  }
}

function rockPaperScissorsOutcome() {
  console.log(strategy.length);
  for (let i = 0; i < strategy.length; i++) {
    if (strategy[i][0] === 'A') {
      if (strategy[i][1] === 'Y') {
        totalScore += draw + rock;
      } else if (strategy[i][1] === 'X') {
        totalScore += lose + scissors;
      } else if (strategy[i][1] === 'Z') {
        totalScore += win + paper;
      }
    } else if (strategy[i][0] === 'B') {
      if (strategy[i][1] === 'Y') {
        totalScore += draw + paper;
      } else if (strategy[i][1] === 'X') {
        totalScore += lose + rock;
      } else if (strategy[i][1] === 'Z') {
        totalScore += win + scissors;
      }
    } else if (strategy[i][0] === 'C') {
      if (strategy[i][1] === 'Y') {
        totalScore += draw + scissors;
      } else if (strategy[i][1] === 'X') {
        totalScore += lose + paper;
      } else if (strategy[i][1] === 'Z') {
        totalScore += win + rock;
      }
    }
  }
  return totalScore;
}

asyncReadFile('testData.txt');
setTimeout(() => {
  console.log(rockPaperScissorsOutcome());
}, 1000);
