import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createForms} from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';
import {Contractors} from './contractors'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            contractors : Contractors,
            ...createForms({
                feedback : InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}