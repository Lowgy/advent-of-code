const { readFileSync, promises: fsPromises } = require('fs');

let data = readFileSync('day6Data.txt', 'utf8').toString();

function detectStartOfPacket(datastream) {
  for (let i = 0; i < datastream.length - 13; i++) {
    let group = datastream.substring(i, i + 14);
    console.log(group);

    if (new Set(group).size === 14) {
      return i + 14;
    }
  }

  return -1;
}

console.log(detectStartOfPacket(data));
