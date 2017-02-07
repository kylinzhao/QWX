const { createStore, compose, applyMiddleware} = require('./redux.js');
// const devTools = require('./libs/remote-redux-devtools.js').default;
import thunkMiddleware from './redux-thunk'

function configureStore(reducer) {
    return createStore(
        reducer,
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
        )
    );
}

module.exports = configureStore;
