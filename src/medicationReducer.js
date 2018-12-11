import { combineReducers } from 'redux';

const INITIAL_STATE = {
  medications: [],
};

const medicationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_MEDICATIONS_SUCCESS':
      console.log("In reducer, calling fetched medications state and action are", state, action);
      return {medications: action.medications};
    case 'ADD_MEDICATION':
      console.log("In reducer, calling add medication state and action are", state, action);
      return {medications: [...state.medications, action.medication]};
    default:
      return state;
  }
};

export default combineReducers({
  medication: medicationReducer,
});
