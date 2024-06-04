const initialState = {
  patients: []
};

const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PATIENT':
      return {
        ...state,
        patients: [...state.patients, action.payload]
      };
    case 'REMOVE_PATIENT':
      return {
        ...state,
        patients: state.patients.filter(patient => patient.id !== action.payload)
      };
    case 'UPDATE_PATIENT':
      return {
        ...state,
        patients: state.patients.map(patient =>
          patient.id === action.payload.id ? action.payload : patient
        )
      };
    default:
      return state;
  }
};

export default patientReducer;
