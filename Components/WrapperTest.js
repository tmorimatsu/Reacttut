import React, { Component } from 'react';
import { StyleSheet,
  Text,
  View,
  Image, 
  TextInput, 
  Alert, 
  TouchableOpacity,
  ActiveIndicator, 
  FlatList } from 'react-native';
import { Container, Content, Form, Input, Item, Button, Icon, Badge,
  Header, Left, Body, Right, Title, FloatingLabel, Label,
  Footer, FooterTab
} from 'native-base';

import { Actions } from 'react-native-router-flux';

import { Test } from './Test';
import { Provider } from 'react-redux';
import { store } from './redux';

export default class Page extends Component {
    render() {
        return(
            <Provider store={store}><Test/></Provider>
        )
    }
}