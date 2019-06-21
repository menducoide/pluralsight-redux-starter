import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers';
import reduxInmutableStateInvariant from 'redux-immutable-state-invariant';
import  thunk from "redux-thunk"; // para manejar las api request, en este caso se usara mockeo
export default function configureStore(initialState) {
        return createStore(
                rootReducer,
                initialState,
                applyMiddleware(thunk,reduxInmutableStateInvariant())
        );
}