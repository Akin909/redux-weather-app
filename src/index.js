import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import styled from 'styled-components';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const Wrapper = styled.div`
height: 100%
width: 100%
`;

ReactDOM.render(
  <Wrapper>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  </Wrapper>
  ,document.querySelector('.container'));
