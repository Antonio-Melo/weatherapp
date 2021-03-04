# Weather App

## Description

This website was made with [ExpressJS](https://expressjs.com/) and [React](https://reactjs.org/).

Allows the users to enter the name of cities and see their temperature, sunrise and sunset times. You can interact with the bar graph and reorder the table using any column.

The select component used is from [ReactSelect](https://react-select.com/home). To make the bar chart, I used [recharts](https://recharts.org/en-US/) and to use make the table [ReactTable](https://react-table.tanstack.com/).

To fetch the weather information I used the [Open Weather Map API](https://openweathermap.org/). The cities are also from this api, but loaded from a [file](http://bulk.openweathermap.org/sample/) with all the cities.

Two endpoints were created:

Returns at maximum 20 cities (in order) that start with the query "name" sent.
```javascript
/cities?name="london"
```

Given a list of ids of cities (ids from the API above) returns the weather info.
```javascript
/weather?ids=123,423,1532
```

Every request to any of this endpoints is saved in a file called "requests.log" like

```log
2021-03-04 22:53:57.204 INFO  /cities with name "Porto" 
2021-03-04 22:53:57.204 INFO  /cities with name "Faro" 
2021-03-04 22:53:58.302 INFO  /weather with ids "2735943,2732438,2742611,2268339" 
```

## Pictures

![Picture 1](https://i.ibb.co/1qpvvtN/Screenshot-2021-03-04-at-23-36-01.png)

![Picture 2](https://i.ibb.co/MNyDgkG/Screenshot-2021-03-04-at-23-28-26.png)

![Picture 3](https://i.ibb.co/7KxVLZD/Screenshot-2021-03-04-at-23-28-34.png)

![Picture 4](https://i.ibb.co/jVvPmk5/Screenshot-2021-03-04-at-23-28-43.png)

## Installation


```bash
npm install
cd client/ && npm install
```

## Usage

Please create a .env file (in the root folder) with following key:

OPEN_WEATHER_API_KEY={YOUR API KEY}

```bash
npm run start
```
