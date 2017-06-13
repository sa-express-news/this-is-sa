import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import AppContainer from './components/AppContainer/AppContainer';
import './index.css';



ReactDOM.render(
  <Provider store={store}><AppContainer /></Provider>,
  document.getElementById('root')
);
