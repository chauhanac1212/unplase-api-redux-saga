import { applyMiddleware,createStore } from "redux";
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootSaga from "./productSaga";
import rootReducer from "./rootReducer";
const sagaMiddleware=createSagaMiddleware();


const middlewares=[sagaMiddleware]

if (process.env.NODE_ENV === `development`) {
   
    middlewares.push(sagaMiddleware);
  }
   
  const store = createStore ( rootReducer,applyMiddleware(...middlewares));
  sagaMiddleware.run(rootSaga)
  export default store