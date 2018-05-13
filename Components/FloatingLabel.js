import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
export default class FloatingLabelExample extends Component {

  constructor(props) {
    super(props);

    this.ref = {};
  }

  _onPress = () => {
    this.props._onPress(this.ref._lastNativeText);
    this.ref.serNativeProps({ text: '' });
  }

  render() {

    const {
      onPress,
    } = this.props;

    return (
      /*<Container>
        <Header />*/
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input ref={(ref) => { this.ref = ref; }} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            
          </Form>
          <Button onPress={this._onPress}><Text>click</Text></Button>
        </Content>
      /*</Container>*/
    );
  }
}
