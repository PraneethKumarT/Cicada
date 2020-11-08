import * as ActionTypes from './ActionTypes';


export const Contractors = (state = {
    isLoading : true,
    errMess : null,
    contractors : []
}, action) => {
    switch (action.type){
        case ActionTypes.ADD_CONTRACTORS:
            return {...state, isLoading : false, errMess: null, contractors : action.payload};

        
        case ActionTypes.CONTRACTORS_LOADING:
            return {...state, isLoading : true, errMess: null, contractors: []};

        case ActionTypes.CONTRACTORS_FAILED:
            return {...state, isLoading : false, errMess: action.payload , contractors: []};

        default : 
            return state;   
    }
}