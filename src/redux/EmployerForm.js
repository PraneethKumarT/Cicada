import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const forms = (state = FORMS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FORM:
            var description = action.payload;
            description.id = state.length;
            description.date = new Date().toISOString();
            console.log("description: ", description);
            return state.concat(description);

        default:
          return state;
      }
};