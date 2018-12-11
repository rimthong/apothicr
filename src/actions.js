const ADD_MEDICATION = 'ADD_MEDICATION';
const FETCH_MEDICATIONS = 'FETCH_MEDICATIONS';

const actions = {
  addMedication: (medication) => {
    return {
      type: ADD_MEDICATION,
      medication,
    }
  },
  fetchMedications: () => {
    return {
      type: FETCH_MEDICATIONS,
    }
  }
}

export default actions;
