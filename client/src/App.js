import './App.css';
import React, { useEffect, useState } from 'react';
const axios = require('axios');
import Select from './components/select';
import BarChartTemp from './components/bar';
import TableContainer from './components/table';

function App() {
  const [cities, setCities] = useState([]);
  const [citiesData, setCitiesData] = useState([]);

  useEffect(() => {
    if(cities.length === 0) {
      return setCitiesData([]);
    }

    const ids = cities.map(city => city.value).join();

    axios.get('/weather', { params: { ids: ids }})
        .then(response => {
          setCitiesData(response.data.list);
        });
  }, [cities]);

  return (
    <div className="App">
      <Select cities={cities} setCities={setCities}/>
      <BarChartTemp citiesData={citiesData}/>
      <TableContainer citiesData={citiesData} />
    </div>
  );
}

export default App;
