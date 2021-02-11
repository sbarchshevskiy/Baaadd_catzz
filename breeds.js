const request = require('request');
const args = process.argv;
let argsSlice = args.slice(2);
const stdout = process.stdout;

const fetch = function(breedname) {

  const path = { method: 'GET',
    url: 'https://api.thecatapi.com/v1/breeds/search?q=' + breedname
  };
  request(path, function(error, response, body) {

    const parsedBody = JSON.parse(body);
    if (error) {
      console.log("Sorry we don't have cats like that");
      process.exit();
    }
    for (let item of parsedBody) {
      console.log(item.description);
    }
  });
};

fetch(argsSlice[0]);