import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer, { IRootState } from "./rootReducer";

const defaultState: {} = {};

function configureStore(preloadedState: {} = defaultState): Store<IRootState> {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}

export default configureStore;
