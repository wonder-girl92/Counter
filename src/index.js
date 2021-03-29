import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import {createStore} from "redux";
import {Provider} from "react-redux";
import counter from './Buttons.js';

const reducer = (state, action) => {
if (action.type==='плюс')
{
    return counter + 1;
}
return '0';

if (action.type === 'минус'&& counter > 0) {
     return counter - 1;
}
    return '0';

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
