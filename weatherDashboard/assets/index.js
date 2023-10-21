const geoKey = 'AIzaSyCQn1etZslxNOK7vmmUN1cTRYIp-4HM0ic'; // google api key
const searchInput = document.getElementById('Search'); //attaching variable name to search box from html
const API_KEY = '609522d39e319430b9a09c7cef58cd91'; //api key for weather app
let currentWeatherItemsE1 = document.getElementById('righttopcontainer'); // element by id to display weather info top right CompressionStream.
let dataLat = 0; // empty array to be filed by google api for weather key
let dataLng = 0;  //empty array to be filed by google api for weather key
// Load previous searches from local storage
let previousSearches = JSON.parse(localStorage.getItem('previousSearches')) || [];
// Maximum number of searches to display
const MAX_SEARCHES = 8;

form.addEventListener('submit', (event) => { //when submit function to get Lat and Long from google api to then add into weather Api.
  event.preventDefault();
  const geoUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchInput.value}&key=${geoKey}`;

 fetch(geoUrl)
    .then(response => response.json())
    .then(json => {
      dataLat = json.results[0].geometry.location.lat;
      dataLng = json.results[0].geometry.location.lng;
      const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${dataLat}&lon=${dataLng}&appid=${API_KEY}`;
      return fetch(weatherUrl);
    })
    .then(response => response.json()) // after first api and paramets for weather api in place, shorthand function.
    .then(json => {
      console.log(json);   //console log showing object. of weather information    
      document.querySelector("#City").innerHTML = " " + json.city.name;
      document.querySelector('.weather-icon').innerHTML = '<img src="./openweathermap-api-icons/icons/' + json.list[0].weather[0].icon + '.png">';
        document.querySelector("#date").innerHTML = json.list[0].dt_txt.split(' ')[0].slice(-12);
        document.querySelector("#Temp").innerHTML = "Temp:" + " " + json.list[0].main.temp;
        document.querySelector("#Windstat").innerHTML = "Wind speed:" + " " + json.list[0].wind.speed;
        document.querySelector("#Humditity").innerHTML = "Humidity:" + " " + json.list[0].main.humidity;
        document.querySelector("#datecard1").innerHTML = json.list[9].dt_txt.split(' ')[0].slice(-12);
        document.querySelector("#tempcard1").innerHTML = "temp:" + " " + json.list[9].main.temp;
        document.querySelector("#windcard1").innerHTML = "wind:" + " " + json.list[9].wind.speed;
        document.querySelector("#humiditycard1").innerHTML = "humidity:" + " " + json.list[0].main.humidity;
        document.querySelector('.weather-icon1').innerHTML = '<img src="./openweathermap-api-icons/icons/' + json.list[9].weather[0].icon + '.png">';
        document.querySelector("#datecard2").innerHTML = json.list[13].dt_txt.split(' ')[0].slice(-12);
        document.querySelector("#tempcard2").innerHTML = "temp:" + " " + json.list[13].main.temp;
        document.querySelector("#windcard2").innerHTML = "wind:" + " " + json.list[13].wind.speed;
        document.querySelector("#humiditycard2").innerHTML = "humidity:" + " " + json.list[13].main.humidity;
        document.querySelector('.weather-icon2').innerHTML = '<img src="./openweathermap-api-icons/icons/' + json.list[13].weather[0].icon + '.png">';
        document.querySelector("#datecard3").innerHTML = json.list[25].dt_txt.split(' ')[0].slice(-12);
        document.querySelector("#tempcard3").innerHTML = "temp:" + " " + json.list[25].main.temp;
        document.querySelector("#windcard3").innerHTML = "wind:" + " " + json.list[25].wind.speed;
        document.querySelector("#humiditycard3").innerHTML = "humidity:" + " " + json.list[25].main.humidity;
        document.querySelector('.weather-icon3').innerHTML = '<img src="./openweathermap-api-icons/icons/' + json.list[25].weather[0].icon + '.png">';
        document.querySelector("#datecard4").innerHTML = json.list[29].dt_txt.split(' ')[0].slice(-12);
        document.querySelector("#tempcard4").innerHTML = "temp:" + " " + json.list[29].main.temp;
        document.querySelector("#windcard4").innerHTML = "wind:" + " " + json.list[29].wind.speed;
        document.querySelector("#humiditycard4").innerHTML = "humidity:" + " " + json.list[29].main.humidity;
        document.querySelector('.weather-icon4').innerHTML = '<img src="./openweathermap-api-icons/icons/' + json.list[29].weather[0].icon + '.png">';
        document.querySelector("#datecard5").innerHTML = json.list[37].dt_txt.split(' ')[0].slice(-12);
        document.querySelector("#tempcard5").innerHTML = "temp:" + " " + json.list[37].main.temp;
        document.querySelector("#windcard5").innerHTML = "wind:" + " " + json.list[37].wind.speed;
        document.querySelector("#humiditycard5").innerHTML = "humidity:" + " " + json.list[37].main.humidity;
        document.querySelector('.weather-icon5').innerHTML = '<img src="./openweathermap-api-icons/icons/' + json.list[37].weather[0].icon + '.png">';

        

        

        
      

      

    

      // Add the new search query to the beginning of the array
      previousSearches.unshift(searchInput.value);
      // Truncate the array to the maximum number of searches
      previousSearches.splice(MAX_SEARCHES);
      // Save the updated array to local storage
      localStorage.setItem('previousSearches', JSON.stringify(previousSearches));
      
      const previousSearchBoxesE1 = document.querySelector('.previousSearchBoxes');
      // Clear the previous search boxes. needed otherwise keeps appending same array.
      previousSearchBoxesE1.innerHTML = '';
      // Create a div for each search query and append it to the container
      for (let i = 0; i < previousSearches.length; i++) {               ///looop for previous searches if greater than one append.
        const previousSearchE1 = document.createElement('div');
        previousSearchE1.textContent = previousSearches[i];
        previousSearchBoxesE1.appendChild(previousSearchE1);
      }
    })
    .catch(err => console.error(err));
});

searchInput.addEventListener('enter', () => {                                                                    ///Same event but for enter button instead of click.
  const geoUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchInput.value}&key=${geoKey}`;

  fetch(geoUrl)
  .then(response => response.json())
  .then(json => {
    dataLat = json.results[0].geometry.location.lat;
    dataLng = json.results[0].geometry.location.lng;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${dataLat}&lon=${dataLng}&appid=${API_KEY}`;
    return fetch(weatherUrl);
    
  })
  .then(response => response.json())
  .then(json => {
    console.log(json); 
    

  
    
    // Add the new search query to the beginning of the array
    previousSearches.unshift(searchInput.value);
    // removes last element of  the array to the maximum number of searches
    previousSearches.splice(MAX_SEARCHES);
    // Save the updated array to local storage
    localStorage.setItem('previousSearches');
    
    const previousSearchBoxesE1 = document.querySelector('.previousSearchBoxes');
    // Clear the previous search boxes
    previousSearchBoxesE1.innerHTML = '';
    // Create a div for each search query and append it to the container
    for (let i = 0; i < previousSearches.length; i++) {
      const previousSearchE1 = document.createElement('div');
      previousSearchE1.textContent = previousSearches[i];
      previousSearchBoxesE1.appendChild(previousSearchE1);
    }
  })
  .catch(err => console.error(err));
});
