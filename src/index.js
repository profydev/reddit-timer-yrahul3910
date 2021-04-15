import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';
import './sass/index.sass';
import 'normalize.css';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<Router><Main /></Router>, document.getElementById('root'));
