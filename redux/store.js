import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import thunk from 'redux-thunk'
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

// Reducers
import auth from './reducers/AuthReducer'

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload
    default: {
      const combineReducer = combineReducers({
        auth
      })
      return combineReducer(state, action)
    }
  }
}

const configureStore = () => {
  const middlewares = [thunk];

  const enhancer = process.env.NODE_ENV === 'production' ?
    compose(applyMiddleware(...middlewares)) :
    composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, enhancer);
  return store;

};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;