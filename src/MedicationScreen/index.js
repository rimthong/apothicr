import React, { Component } from 'react';
import Medication from './MedicationScreen.js';
import AddMedication from './AddMedication.js';
import { createStackNavigator } from 'react-navigation';
export default (DrawNav = createStackNavigator({
  Medication: { screen: Medication },
  AddMedication: { screen: AddMedication },
}));
