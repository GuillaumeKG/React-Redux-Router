import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './app/redux/store';
import AppRoutes from './app//routes.js';


ReactDOM.render( 
    <Provider store={store}>
        <AppRoutes />
    </Provider>, 
    document.getElementById('app'))
