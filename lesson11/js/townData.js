const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
      if(towns[i].name == "Soda Springs" || towns[i].name == "Preston" || towns[i].name == "Fish Haven") {
        let card = document.createElement('section');
        if(towns[i].name == "Fish Haven") {
          card.setAttribute("id", "leftImage")
        }
        let name = document.createElement('h2');
        let motto = document.createElement('p');
        let founded = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
        let image = document.createElement('img');

        name.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        founded.textContent = "Year Founded: " + towns[i].yearFounded;
        population.textContent = "Population: " + towns[i].currentPopulation;
        rainfall.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
        let imgsrc = "images/" + towns[i].photo;
        image.setAttribute('src', imgsrc);
        let alt = towns[i].name + ' image'; 
        image.setAttribute('alt', alt);

        card.appendChild(name);
        card.appendChild(motto);
        card.appendChild(founded);
        card.appendChild(population);
        card.appendChild(rainfall);
        card.appendChild(image);

        document.querySelector('div.town-cards').appendChild(card);
    }
  }
  });