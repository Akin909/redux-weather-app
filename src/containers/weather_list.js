import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import uuid from 'uuid/V4';
import { Td, Tbody, Th, Tr, Thead, Table} from '../components/table.js';
import Chart from '../components/chart.js';


class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = _.map( cityData.list.map( weather => weather.main.temp ), (temp) => temp -273);
    const humidity = cityData.list.map( weather => weather.main.humidity );
    const pressures = cityData.list.map( weather => weather.main.pressure );


    return (
      <Tr key={uuid()}>
        <Td>{name}</Td>
        <Td> <Chart units="°C" data={temps} color="red" /> </Td>
        <Td> <Chart units="hPa" data={pressures} color="green" /> </Td>
        <Td> <Chart units="%" data={humidity} color="blue" /> </Td>
      </Tr>
      );
  }

  render() {
    return (
      <Table overFlowY={scroll}>
        <Thead>
          <Tr>
            <Th>City</Th>
            <Th>Temperature (°C)</Th>
            <Th>Pressure (hPa)</Th>
            <Th>Humidity (%)</Th>
          </Tr>
        </Thead>
        <Tbody>
          { this.props.weather.map(this.renderWeather)}
        </Tbody>
      </Table>
      );
  }
}

/**
 * Pull weather off the state arg and map the state to props
 *
 * @param {object} {weather} Destructured weather object
 * @returns {object} Weather method on the state obj
 */
function mapStateToProps({ weather }) {
  return { weather }; // { weather } === { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList);
