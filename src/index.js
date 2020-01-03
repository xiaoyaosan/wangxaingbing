import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  ,HashRouter as Router } from 'react-router-dom';
import './index.css';
import App from './pages/Home';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>,
 document.getElementById('root')
 );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
