
import {createStore, compose} from 'redux';
import rootReducer from '../reducers';

// dev tools middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// create a redux store with our reducer
const configureStore = initialState => ({
    ...createStore(
        rootReducer,
        initialState,
        composeEnhancers()
    ),
});

const store = configureStore();
export default store;
