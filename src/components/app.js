import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from '../containers/search_bar.js';
import WeatherList from '../containers/weather_list.js';


const Title = styled.h1`
  background: hsl(206, 99%, 31%);
  width: 100%;
  font-size: 2em;
  text-align: center;
  height: 2em;
  margin: 0;
  margin-bottom: 1em;
  color: white;
  box-shadow: 0px 1px 3px grey;
`;

// justify-content: space-between;
const Wrapper = styled.div`
  font-family: 'Helvetica';
  color:CornflowerBlue;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #ECECEC;
  padding: 0em;
`;

export default class App extends Component {
  render() {
    return (
        <Wrapper>
          <Title>Akin's Redux Weather App</Title>
            <SearchBar/>
            <WeatherList/>
        </Wrapper>
      );
  }
}

