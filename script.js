document.getElementById('getWeather').addEventListener('click', fetchWeatther); 

function fetchWeatther(){
    const city = document.getElementById('city').value;
    const apiKey = 'b43e5524dd27f083189dbc78d753c9f4';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
  .then(data => {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const location = data.name;
    document.getElementById('weatherResult').innerHTML = 
    `<h2>${location}</h2>
    <p>Temperature: ${temperature}°C</p>
    <p>Description: ${description}</p>`;

    })
    .catch(error => {
        document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
    });

} 
