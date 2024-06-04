import { createStore } from 'redux';
import patientReducer from './reducers';

const store = createStore(patientReducer);

export default store;
