import { ForkEffect } from 'redux-saga/effects';

function* mySaga(): Generator<ForkEffect<never>, void, unknown> {
  // yield takeLatest(LOGIN_REQUESTED, loginUser);
  // yield takeLatest(SIGNUP_REQUESTED, signUpUser);
  // yield takeLatest(APPOINTMENT_SET_REQUESTED, appointmentsSetRequest);
  // yield takeLatest(APPOINTMENT_GET_REQUESTED, appointmentsGetRequest);
  // yield takeLatest(RESOLUTION_GET_REQUESTED, resolutionsGetRequest);
  // yield takeLatest(RESOLUTION_SET_REQUESTED, resolutionSetRequest);
  // yield takeLatest(RESOLUTION_UPDATE_REQUESTED, resolutionUpdateRequest);
}

export default mySaga;
