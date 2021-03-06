import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import middleware from './middleware'
import 'semantic-ui-css/semantic.min.css'


const store = createStore(reducer, composeWithDevTools(middleware))

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);


