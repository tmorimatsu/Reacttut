import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Test from './Components/Test';
import Page from './Components/Page';

import { Provider } from 'react-redux';
import { store } from './Components/redux';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="Test" initial component={Test} title="Test"/>
    <Scene key="Page" component={Page} title="Page"/>    
  </Scene>,
)

export default class App extends Component {
  render() {
    return <Provider store={store}><Router scenes={scenes}/></Provider>
  }
}