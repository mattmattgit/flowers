const fs = require('fs');

exports.fetchData =  () => {
  try {
    var data = fs.readFileSync('db/flowers.json');
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};