import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'

function* addMedicationAsync() {
  yield delay(1000)
  yield put({ type: 'ADD_MEDICATION' })
}

function* watchAddMedicationAsync() {
  yield takeEvery('ADD_MEDICATION_ASYNC', addMedicationAsync)
}

function* fetchMedications() {
  yield put({ type: 'FETCH_MEDICATIONS_START' });
  yield delay(1000)
  // TODO get those from the blockchain
  const medications = [
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
  ];
  yield put({ type: 'FETCH_MEDICATIONS_SUCCESS', medications });
}

function* watchFetchMedications() {
  yield takeEvery('FETCH_MEDICATIONS', fetchMedications)
}

export default function* rootSaga() {
  yield all([
    watchAddMedicationAsync(),
    watchFetchMedications(),
  ])
}
