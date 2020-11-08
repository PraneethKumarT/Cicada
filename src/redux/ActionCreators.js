import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';


export const addForm = (name, telnum, price, description) => (dispatch) => {

    const newFeedback = {
       name : name,
        telnum : telnum,
        price : price,
        description : description
    };
    newFeedback.date = new Date().toISOString();
    
    return fetch(baseUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(newFeedback),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
      .then(response=>response.json())
      .then(response=>alert(JSON.stringify(response)))
     .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};



export const contractorsLoading = () => ({
  type: ActionTypes.CONTRACTORS_LOADING
});

export const contractorsFailed = (errmess) => ({
  type : ActionTypes.CONTRACTORS_FAILED,
  payload : errmess
})

export const addcontractors = (contractors) => ({
  type : ActionTypes.ADD_CONTRACTORS,
  payload : contractors
})

export const fetchContractors = () => (dispatch) => {
  return fetch(baseUrl + 'feedback')
  .then(response => {
      if(response.ok){
          return response;
      }
      else {
          var error = new Error('Error'+ response.status + ': '+ response.statusText)
          error.response = response;
          throw error;
      }
  },
  error => {
      var errmess =  new Error(error.message);
      throw errmess;
  })
      .then(response => response.json())
      .then(contractors => dispatch(addcontractors(contractors)))
      .catch(error => dispatch(contractorsFailed(error.message)))

}
