import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import cartReducer from './component/reducers/cart';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducer);
ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}><App /></Provider>
    </BrowserRouter>
    , document.getElementById('root'));
    
serviceWorker.unregister();
