const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let motto = document.createElement('p');
        let founded = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
        let image = document.createElement('img');

        name.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        founded.textContent = towns[i].yearFounded;
        population.textContent = towns[i].currentPopulation;
        rainfall.textContent = towns[i].averageRainfall;
        image.setAttribute('src', towns[i].photo);
        let alt = towns[i].name + ' ' + 'image'; 
        image.setAttribute('alt', alt);

        card.appendChild(name);
        card.appendChild(motto);
        card.appendChild(founded);
        card.appendChild(population);
        card.appendChild(rainfall);
        card.appendChild(image);

        document.querySelector('div.town-cards').appendChild(card);
    }
  });