import { createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore,combineReducers } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';

// Reducers
import test from './reducers/testReducer';

const rootReducer = combineReducers({
  test,
});

const configureStore = () =>{
      const middlewares = [thunk];
    
    const enhancer = process.env.NODE_ENV === 'production' ?  
          compose(applyMiddleware(...middlewares)): 
    composeWithDevTools(applyMiddleware(...middlewares));

    const store = createStore(rootReducer,enhancer);
    return store;
	
};

const wrapper = createWrapper(configureStore,{
    debug:process.env.NODE_ENV === 'development',
});

export default wrapper;