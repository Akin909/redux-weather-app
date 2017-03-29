import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from '../containers/search_bar.js';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const wrapper = styled.div`
  background: yellow;
  height: 100vh;
  width: 100vw;



`;
export default class App extends Component {
  render() {
    return (
      <div>
        <wrapper>
          <Title>Hello</Title>
          <SearchBar/>
        </wrapper>
      </div>
      );
  }
}


