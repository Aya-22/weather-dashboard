var key = "011270d41f698434cf9cd446d6dc399e";

var location = document.getElementsByClassName('weather');

function getApi(lat,lon) {
 var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' +lat+'&lon=' +lon+'&exclude=hourly,minutely,alerts&appid=' + key;   
  fetch(requestUrl)
    .then(function (response) {
      console.log(location);  
      return response.json();
  }) .then(function (data) {
    console.log(data);

    document.getElementById('city').textContent = cityName.value;
    document.getElementById('temp').textContent = data.current.temp;
    document.getElementById('humidity').textContent = data.current.humidity;
    document.getElementById('wind').textContent = data.current.wind_speed;
    document.getElementById('uv-index').textContent = data.current.uv;

})


}

function searchCity (cityName) {
  var ladLongCall = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName+"&appid=" + key;  
  fetch(ladLongCall)
  .then(function (response) {
      console.log(response);

      return response.json();
  }) .then( function (data){
      console.log(data);
      getApi (data.coord.lat, data.coord.lon)
  })
}
searchCity("San Francisco")
// getApi(requestUrl);