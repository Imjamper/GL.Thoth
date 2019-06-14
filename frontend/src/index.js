import React from 'react';
import Main from './pages/main';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import * as serviceWorker from './serviceWorker';
import './index.css';

const ApiURL = "http://localhost:8080/"

configureAxios();
ReactDOM.render(
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
        <Main />
    </ThemeProvider>,
    document.querySelector('#root'),
);

function configureAxios() {
    axios.defaults.baseURL = ApiURL; 
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
