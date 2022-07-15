
const cities = {
    703448: 'Kyiv',
    3117735: 'Madrid',
    2643743: 'London',
    5815135: 'Washington'
}

function createSelect () {
    let select = document.createElement('select');
    for (let key in cities) {
        let options = document.createElement('option');
        options.value = key;
        options.text = cities[key];
        select.append(options);
    }
    select.setAttribute('id', 'city');
    document.querySelector('.weather').before(select);
}

createSelect();

document.querySelector('#city').onchange = getWeather;

const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "49a4056362c7d71a94f9e1fedb16e28c"
}

function getWeather () {
    document.querySelector('.weather').style.display = 'flex';
    let value = document.querySelector('#city').value; 
    fetch(`${param.url}weather?id=${value}&appid=${param.appid}`)
    .then (function (resp) { return resp.json() })
    .then (showWeather) }

function showWeather (data) {
    document.querySelector('.town').textContent = data.name;
    document.querySelector('.temperature').innerHTML = Math.round (data.main.temp - 273) + '&deg;';
    document.querySelector('.clouds').textContent = data.weather[0]['description'];
    document.querySelector('.img').setAttribute('src', `https:///openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`);
}
 

