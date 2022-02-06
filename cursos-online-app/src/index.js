import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Importar Reducers y provider para manejo de variables de estado globales
import {initialState} from './contexto/initialState';
import {StateProvider} from './contexto/store';
import {mainReducer} from './contexto/reducers';

ReactDOM.render(
  <React.StrictMode>
    {/* Al provider se le indica el initialState donde se guardaran las variables globales y los Reducers */}
    <StateProvider initialState={initialState} reducer={mainReducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
