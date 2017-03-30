import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from '../containers/search_bar.js';

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: skyBlue;
  margin-bottom: 1em;
`;

const Wrapper = styled.div`
  font-family: 'Helvetica';
  height: 100vh;
  width: 100vw;
  background-color: Seashell;
  padding: 0em;
`;

export default class App extends Component {
  render() {
    return (
        <Wrapper>
          <Title>Akin's Redux Weather App</Title>
          <SearchBar/>
        </Wrapper>
      );
  }
}

