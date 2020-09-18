import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default () => {
  let store = createStore(composeWithDevTools(applyMiddleware(thunk)));
  return store;
};
