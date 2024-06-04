import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPatient, removePatient, updatePatient } from './actions';

class App extends Component {
  // Implemente os métodos necessários para manipular pacientes aqui

  render() {
    return (
      <div>
        {/* Conteúdo do aplicativo */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  patients: state.patients
});

const mapDispatchToProps = {
  addPatient,
  removePatient,
  updatePatient
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
