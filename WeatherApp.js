

        function showDay() {
          let now = new Date();
          let currentDay = document.querySelector("#day");
          let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ];
          let day = days[now.getDay()];
          currentDay.innerHTML = `${day}`;
          let currentHour = document.querySelector("#hour");
          let hours = now.getHours();
          currentHour.innerHTML = `${hours}`;
          if (hours<10){hours=`0${hours}`;}
          let currentMinute = document.querySelector("#minute");
          let minutes = now.getMinutes();
          if (minutes<10){minutes=`0${minutes}`;}
          currentMinute.innerHTML = `${minutes}`;
        }
        showDay(); 
        
function searchCity (city){
  let apiKey = "9ddb7146cc9f6558c3910ca2f5b2749d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
 
}
function enterCity(event) {
  event.preventDefault();
  
  let city=document.querySelector("#input").value;
 searchCity(city);
  } 
  function searchLocation(position) {
    let apiKey = "9ddb7146cc9f6558c3910ca2f5b2749d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
      position.coords.latitude
    }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(showTemperature);
    
  }
  
  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  } 
  
let form = document.querySelector("#search-form");
form.addEventListener("submit", enterCity);

function showTemperature(response) {
  console.log(response.data);
  document.querySelector("h1").innerHTML=response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#humidity").innerHTML=(response.data.main.humidity);
  document.querySelector("#windspeed").innerHTML=Math.round(response.data.wind.speed);
  document.querySelector("#description").innerHTML=(response.data.weather[0].main);

}
let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);
searchCity ("New York"); 

