#!/usr/bin/node
const process = require('process');
const request = require('request');
const api = process.argv[2];

request(api, function (error, response, body) {
  if (error) {
    console.error('error:', error);
  }
  const films = JSON.parse(response.body); 
  const filtered = films.results.filter(film => {
    for (const character of film.characters) {
      if (character.includes('18')) {
        return true;
      }
    }
    return false;
  });
  console.log(filtered.length);
});
