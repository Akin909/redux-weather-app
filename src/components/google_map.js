import React, { Component } from 'react';
import styled from 'styled-components';

const Map = styled.div`
  height: 200px;
  width: 250;
`;

// <Map innerRef={ (map) => { this.div = map }}/>
class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon,
      }
    });
  }
  render() {
    return (
      <div ref="map" className="exception"></div>
    );
  }
}

export default GoogleMap;
