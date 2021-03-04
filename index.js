const express = require('express');
const api = require('./api.js');
const cities = require('./cities.js');
const logOptions = { logFilePath:'requests.log', timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS' };
const log = require('simple-node-logger').createSimpleLogger(logOptions);

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000;

app.get('/cities', (req, res) => {
    const { name } = req.query;
    log.info('/cities with name "', name, '"');

    if(!name) {
        res.statusCode = 400;
        return res.send("Missing query 'name'.");
    }

    const citiesFound = cities.findCityByName(name);

    return res.json(citiesFound);
});

app.get('/weather', (req, res) => {
    const { ids } = req.query;
    log.info('/weather with ids "', ids, '"');

    if(!ids) {
        res.statusCode = 400;
        return res.send("Missing query 'cityId'.");
    }

    api.getCurrentWeather(ids).then(data => {
        if(data === 'error') {
            res.statusCode = 500;
            return res.send('Error getting weather data for city with ids: ' + ids);
        }

        return res.json(data);
    });
});

//app.listen(port, () => console.log(`Server running on ${port}...`));