// Library import
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// Import middleware
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';

// Redux Reducer
import reducers from './reducers/index';

// CSS import
import './style/index.css';

// Components import
import App from './App';

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reducers, middleware);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

export default store;
