const ADD_MEDICATION = 'ADD_MEDICATION';

const actions = {
  addMedication: (medication) => {
    return {
      type: ADD_MEDICATION,
      medication,
    }
  }
}

export default actions;
