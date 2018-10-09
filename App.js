import React, { Component } from 'react';
import Expo from 'expo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import HomeScreen from './src/HomeScreen/index';
import medicationReducer from './src/medicationReducer';

const store = createStore(medicationReducer);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('native-base/Fonts/Ionicons.ttf')
    });
    this.setState({ isReady: true });
  }

  addMedication(medication) {
    console.log('Adding medication:', medication);
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Provider store={store}>
        <HomeScreen
          screenProps={{
            medication: this.state.medication,
            addMedication: this.addMedication,
          }}
        />
      </Provider>
    );
  }
}

