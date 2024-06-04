let nextPatientId = 0;

export const addPatient = (name, age, gender) => ({
  type: 'ADD_PATIENT',
  payload: {
    id: nextPatientId++,
    name,
    age,
    gender
  }
});

export const removePatient = id => ({
  type: 'REMOVE_PATIENT',
  payload: id
});

export const updatePatient = (id, name, age, gender) => ({
  type: 'UPDATE_PATIENT',
  payload: {
    id,
    name,
    age,
    gender
  }
});
