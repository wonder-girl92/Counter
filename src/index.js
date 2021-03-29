import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import {createStore} from "redux";
import {Provider} from "react-redux";


const reducer = (state=0, action) => {
if (action.type==='плюс')
{
    return state + 1;
    }


if (action.type === 'минус'&& state > 0) {
     return state - 1;
};

if (action.type === 'сброс') {
    return '0'
}

}
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
      <Provider store = {store}>
    <App />
      </Provider>
  </React.StrictMode>,
     document.getElementById('root')
);
