import React, { PureComponent } from 'react';
import styled from 'styled-components'
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


export default class BarChartTemp extends PureComponent {

  render() {
    const { citiesData } = this.props;

    const data = citiesData.map(city => { return { name: city.name, Temperature: city.main.temp }});

    return (
      <SelectWrapper>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Temperature" fill="#eabf9f" />
          </BarChart>
        </ResponsiveContainer>
      </SelectWrapper>
    );
  }
}

const SelectWrapper = styled.div`
    margin: auto;
    width: 50%;
    padding: 10px;
`
