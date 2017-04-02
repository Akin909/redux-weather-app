import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index.js';

const Input = styled.input`
  font-size: 1.25em;
  padding: 0.5em;
  color: skyBlue;
  border: none
  border-radius: 3px;
  width: 80%;
  height: 100%;
  margin: 0.5em 0.5em;
  background: hsla(0,0,0,0.4);
  outline: none;
  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0.1);
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  `;

  const Button = styled.button`
    color: white;
    background:#00599D;
    border: none;
    border-radius:50%;
    width: 4em;
    height: 4em;
    box-shadow: 0px 2px 3px grey;
  `;

  const Span = styled.span`
    width: 10%;
    height: 100;
 `;

class SearchBar extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = { term:'' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log( event.target.value );
    this.setState({
      term: event.target.value 
    });
  }
  onFormSubmit(event){
    event.preventDefault();
    //Fetch weather data
    this.props.fetchWeather(this.state.term,'uk');    
    this.setState({
      term: ''
    });
  }

  render() {
    return (
      <Form onSubmit={ this.onFormSubmit } >
        <Input 
          placeholder="Get a five-day forecast in your favorite cities"
          value={ this.state.term }
          onChange={ this.onInputChange }
          autoFocus={focus}
        /> 
        <Span>
          <Button type="submit">&#43;</Button>
        </Span>
      </Form>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
