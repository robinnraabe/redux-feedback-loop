import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelings = (state='', action) => {
    switch (action.type) {
        case 'SET_FEELINGS':
            return action.payload;
        default:
            return state;
    }
}

const support = (state='', action) => {
    switch (action.type) {
        case 'SET_SUPPORT':
            return action.payload;
        default:
            return state;
    }
}

const understanding = (state='', action) => {
    switch (action.type) {
        case 'SET_UNDERSTANDING':
            return action.payload;
        default:
            return state;
    }
}

const comments = (state='', action) => {
    switch (action.type) {
        case 'SET_COMMENTS':
            return action.payload;
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        feelings,
        support,
        understanding,
        comments
    }),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
