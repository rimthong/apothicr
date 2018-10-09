import { combineReducers } from 'redux';

const INITIAL_STATE = {
  medications: [
    {
      id: 1,
      name: 'Centrum',
      format: 'pill',
      type: 'vitamin',
      dose: '1 caplet',
      schedule: {
        amount: 1,
        frequency: 'daily morning',
        note: 'with food',
      },
    },
    {
      id: 2,
      name: 'Acetaminophen',
      format: 'pill',
      type: 'painkiller',
      dose: '500mg',
      schedule: {
        amount: 1,
        frequency: 'when needed',
      },
    },
    {
      id: 3,
      name: 'Zinc',
      format: 'pill',
      type: 'vitamin',
      dose: '50mg',
      schedule: {
        amount: 1,
        frequency: 'daily morning',
      },
    },
    {
      id: 4,
      name: 'Oxeze Turbuhaler',
      format: 'inhaler',
      type: 'bronchodilator',
      dose: '6mcg',
      schedule: {
        amount: 1,
        frequency: 'daily morning',
      },
    },
  ],
};

const medicationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default combineReducers({
  medication: medicationReducer,
});
