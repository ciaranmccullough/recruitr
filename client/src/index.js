import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseLine from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseLine />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
