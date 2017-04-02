import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/V4';
import { Td, Tbody, Tr, Thead, Table} from '../components/table.js';
import Chart from '../components/chart.js';


class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map( weather => weather.main.temp );
    const humidity = cityData.list.map( weather => weather.main.humidity );


    return (
      <Tr key={uuid()}>
        <Td>{name}</Td>
        <Td>
          <Chart data={temps} color="red" />
        </Td>
      </Tr>
      );
  }

  render() {
    return (
      <Table>
        <Thead>
          <Tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
