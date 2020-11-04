const fs = require('fs');

const breedDetailsFromFile = function(breed,functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) functionToRunWhenThingsAreDone(data);
    else functionToRunWhenThingsAreDone(undefined);
  });
};
module.exports = breedDetailsFromFile;