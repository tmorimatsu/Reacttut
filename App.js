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
import { Container, Content, Form, Input, Item, Button,
  Header, Left, Body, Right, Title, FloatingLabel, Label,
  Footer, FooterTab
} from 'native-base';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      isLoading: '',
      username: '',
      password: '',
    };
  }


  _onSubmit = () => {
    fetch('url', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
    .then((response)=>{alert(response)})
  }

  render() {
    return (
      <Container>
        <Header>
        <Left/>
        <Body>
          <Title>Login</Title>
        </Body>
        <Right/>
        </Header>
        <Content styles={{justifyContent: 'center', alignItems: 'center'}}>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={(username)=>{this.setState({username})}}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input  onChangeText={(password)=>{this.setState({password})}}/>
            </Item>
          </Form>
          <Button block onPress={()=>{alert(this.state.username + '\n' + this.state.password)}}><Text>Button</Text></Button>
        </Content>
      </Container>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
