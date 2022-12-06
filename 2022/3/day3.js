const { readFileSync, promises: fsPromises } = require('fs');

let testData = [];
let sumOfPositions = 0;

async function asyncReadFile(filename) {
  try {
    const data = await fsPromises.readFile(filename, 'utf8');
    testData = extractThreeLines(data);
    console.log(testData);
  } catch (err) {
    console.error(err);
  }
}

function extractThreeLines(data) {
  let threeLines = [];
  let lines = data.split(/\r?\n/);
  for (let i = 0; i < lines.length; i += 3) {
    threeLines.push(lines.slice(i, i + 3));
  }
  return threeLines;
}

// function splitInHalf() {
//   for (let i = 0; i < testData.length; i++) {
//     let middleOfString = Math.floor(testData[i][0].length / 2);
//     let firstHalf = testData[i][0].slice(0, middleOfString);
//     let secondHalf = testData[i][0].slice(middleOfString);
//     let commonLetters = findCommonLetters(firstHalf, secondHalf);
//     for (let j = 0; j < commonLetters.length; j++) {
//       if (commonLetters[j] === commonLetters[j].toUpperCase()) {
//         sumOfPositions += commonLetters[j].charCodeAt(0) - 64 + 26;
//       } else {
//         sumOfPositions += commonLetters[j].charCodeAt(0) - 96;
//       }
//     }
//     console.log(firstHalf, secondHalf);
//   }
//   console.log(sumOfPositions);
//   return sumOfPositions;
// }

function removeDuplicates(commonLetters) {
  let uniqueLetters = '';
  for (let i = 0; i < commonLetters.length; i++) {
    if (!uniqueLetters.includes(commonLetters[i])) {
      uniqueLetters += commonLetters[i];
    }
  }
  console.log(uniqueLetters);
  return uniqueLetters;
}

function findMatchingLetterInEachItem() {
  for (let i = 0; i < testData.length; i++) {
    let firstItem = testData[i][0];
    let secondItem = testData[i][1];
    let thirdItem = testData[i][2];
    let commonLetters = '';
    for (let j = 0; j < firstItem.length; j++) {
      if (
        secondItem.includes(firstItem[j]) &&
        thirdItem.includes(firstItem[j])
      ) {
        commonLetters += firstItem[j];
      }
    }
    let unique = removeDuplicates(commonLetters);
    for (let k = 0; k < unique.length; k++) {
      if (unique[k] === unique[k].toUpperCase()) {
        sumOfPositions += unique[k].charCodeAt(0) - 64 + 26;
      } else {
        sumOfPositions += unique[k].charCodeAt(0) - 96;
      }
    }
  }
  console.log(sumOfPositions);
}

asyncReadFile('day3Data.txt');
setTimeout(() => {
  console.log(findMatchingLetterInEachItem());
}, 1000);
