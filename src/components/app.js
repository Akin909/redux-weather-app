import React, { Component } from 'react';
import  styled,{injectGlobal } from 'styled-components';
import SearchBar from '../containers/search_bar.js';
import WeatherList from '../containers/weather_list.js';

injectGlobal`
html {
    height: 100vh;
    width: 100vw;
}
body {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    height: 100%;
    width: 100%;
}

* {
    box-sizing: inherit;

}
.exception {
    height: 200px;
    width: 250px;
}
`;


const Title = styled.h1`
  background: hsl(206, 99%, 31%);
  width: 100%;
  font-size: 2em;
  text-align: center;
  height: auto;
  padding: 0.5rem
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
  height: 100%;
  min-height: 100vh;
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

