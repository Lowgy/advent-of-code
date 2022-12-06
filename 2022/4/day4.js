// PART 1
const { readFileSync, promises: fsPromises } = require('fs');

const pairRanges = readFileSync('day4Data.txt', 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((line) => {
    console.log(
      Array.from(line.matchAll(/\d+/g), (d) => Number.parseInt(d, 10))
    );
  });

const overlapping = pairRanges.filter(([start1, end1, start2, end2]) => {
  return (
    (start1 >= start2 && end1 <= end2) || (start1 <= start2 && end1 >= end2)
  );
}).length;

console.log(overlapping);

// PART 2
// const { readFileSync, promises: fsPromises } = require('fs');

// const pairRanges = readFileSync('day4Data.txt', 'utf8')
//   .toString()
//   .trim()
//   .split('\n')
//   .map((line) => {
//     return Array.from(line.matchAll(/\d+/g), (d) => Number.parseInt(d, 10));
//   });

// const overlapping = pairRanges.filter(([start1, end1, start2, end2]) => {
//   return (
//     (start2 <= end1 && start2 >= start1) || (start1 <= end2 && start1 >= start2)
//   );
// }).length;

// console.log(overlapping);
