import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import StateProvider from './context/StateProvider';
import stateReducer, { initialState } from './context/stateReducer';

import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <StateProvider initialState={initialState} reducer={stateReducer}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StateProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
