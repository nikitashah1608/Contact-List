import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import './index.css'; 
import contactreducer from './store/reducers/contact';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_CPOMPOSE || compose; 

const store = createStore(contactreducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);
