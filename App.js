import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import WrapperTest from './Components/WrapperTest';
import Page from './Components/Page';

import { Provider } from 'react-redux';
import { store } from './Components/redux';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="WrapperTest" initial component={WrapperTest} title="WrapperTest"/>
    <Scene key="Page" component={Page} title="Page"/>    
  </Scene>,
)

export default class App extends Component {
  render() {
    return <Router scenes={scenes}/>
  }
}