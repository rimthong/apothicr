import React, { Component } from 'react';
import HomeScreen from './HomeScreen.js';
import Medication from '../MedicationScreen/index.js';
import Profile from '../ProfileScreen/index.js';
import SideBar from '../SideBar/SideBar.js';
import { createDrawerNavigator } from 'react-navigation';

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Medication: { screen: Medication },
    Profile: { screen: Profile }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default HomeScreenRouter;
