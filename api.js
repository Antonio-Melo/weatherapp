const axios = require('axios');

const OPEN_WEATHER_MAP_BASE_URL = "http://api.openweathermap.org/data/2.5/group";

exports.getCurrentWeather = citiesIds => {
    console.log("The ids are: " + citiesIds);
    return axios.get(OPEN_WEATHER_MAP_BASE_URL + '?id=' + citiesIds + "&units=metric&appid=" + process.env.OPEN_WEATHER_API_KEY)
        .then(response => response.data)
        .catch(error => {
            console.error(error);
            return 'error';
        })
}