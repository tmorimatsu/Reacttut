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
import { /*Container,*/ Content, Form, Input, Item, Button, Icon, Badge,
  Header, Left, Body, Right, Title, FloatingLabel, Label,
  Footer, FooterTab
} from 'native-base';

import { connect, Provider } from 'react-redux';
import { changePassword, changeSearchText, changeSelectedTab, changeUsername } from './redux';
import { store } from './redux';

import { Actions } from 'react-native-router-flux';

export class Test extends Component {

  constructor(props) {
    super(props);
    /*this.state = { 
      searchtext: '',
      username: '',
      password: '',
      selectedTab: 'app',
    };*/
  }

  url = '';

  _onSubmit = () => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
    .then((response)=>{alert(response)})
  }

  render() {

    if(this.state.selectedTab!==null && this.state.selectedTab==='app'){
      return (

        <View>
          <Header searchBar rounded>
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="Search" onChangeText={this.props.text/*(searchtext)=>{this.setState({searchtext})}*/} />
              <Icon name="ios-people" />
            </Item>
            <Button transparent>
              <Text>Search</Text>
            </Button>
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
            <Button block onPress={()=>{alert("username: " + this.state.username + '\npassword: ' + this.state.password + '\nsearchtext: ' + this.state.searchtext)}}><Text>Button</Text></Button>
            <Button block info onPress={Actions.Page}><Text>Next Page</Text></Button>
            
  
          </Content>
  
          <Footer>
            <FooterTab>
              <Button active={this.state.selectedTab==='app'} badge vertical onPress={()=>{this.setState({selectedTab: 'app'})}}>
                <Badge><Text>6</Text></Badge>
                <Icon name="apps"/>
                <Text>Apps</Text>
              </Button>
              <Button active={this.state.selectedTab==='camera'} vertical onPress={()=>{this.setState({selectedTab: 'camera'})}}>
                <Icon name="camera"/>
                <Text>Camera</Text>
              </Button>
            </FooterTab>
          </Footer>
          </View>
      );
    }else{
      return (
        <View>
          <Header searchBar rounded>
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="Search" onChangeText={(searchtext)=>{this.setState({searchtext})}} />
              <Icon name="ios-people" />
            </Item>
            <Button transparent>
              <Text>Search</Text>
            </Button>
          </Header>
  
          <Content styles={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>Camera Fragment</Text>
          </Content>
  
          <Footer>
            <FooterTab>
              <Button active={this.state.selectedTab==='app'} badge vertical onPress={()=>{this.setState({selectedTab: 'app'})}}>
                <Badge><Text>6</Text></Badge>
                <Icon name="apps"/>
                <Text>Apps</Text>
              </Button>
              <Button active={this.state.selectedTab==='camera'} vertical onPress={()=>{this.setState({selectedTab: 'camera'})}}>
                <Icon name="camera"/>
                <Text>Camera</Text>
              </Button>
            </FooterTab>
          </Footer>
          </View>
      );
    }
  }
}

const mapStateToProps = state => ({
  stateholder: state.changeState,
});

const mapDispatchToProps = {
  changePassword, 
  changeSearchText, 
  changeSelectedTab, 
  changeUsername,
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);

export default Container;