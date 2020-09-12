// a
const fetch = require("node-fetch");
const getPlanetforFirstSpeciesInFirstMovieForPerson = id => {
  const person = {};
  fetch(`https://swapi.dev/api/people/${id}`)
    .then(res => res.json())
    .then(data => {
      person["Name"] = data.name;
      fetch(data.films[0])
        .then(res => res.json())
        .then(data => {
          person["First film"] = data.title;
        });
      fetch(data.homeworld)
        .then(res => res.json())
        .then(data => {
          person["Homeworld for specie"] = data.name;
          console.log(person);
        });
    });
};

//getPlanetforFirstSpeciesInFirstMovieForPerson(1)

const getPlanetforFirstSpeciesInFirstMovieForPersonAsync = async id => {
  const person = {};
  try {
    const character = await fetch(
      `https://swapi.dev/api/people/${id}`
    ).then(res => res.json());
    person["Name"] = character.name;
    const film = await fetch(character.films[0]).then(res => res.json());
    const homeworld = await fetch(character.homeworld).then(res => res.json());
    person["First film"] = film.title;
    person["Homeworld for specie"] = homeworld.name;
  } catch (err) {
    console.error(err);
  }

  console.log(person);
};

getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1);
