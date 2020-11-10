import { createStore, applyMiddleware, combineReducers, Store } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { AppActionTypes } from "./actions/action.types";

import alertsReducer from "./reducers/alerts";
import authReducer from "./reducers/auth";

const middleware = [thunk as ThunkMiddleware<AppState, AppActionTypes>];
const enhanceCompose = composeWithDevTools({ shouldCatchErrors: true });

const rootReducer = combineReducers({
  alerts: alertsReducer,
  auth: authReducer,
});

const store: Store<AppState, any> = createStore(
  rootReducer,
  enhanceCompose(applyMiddleware(...middleware))
);

export default store;
export type AppState = ReturnType<typeof rootReducer>;
