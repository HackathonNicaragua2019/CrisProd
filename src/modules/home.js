import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.cab}>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          
          <Body>
            <Title>RS-P</Title>
          </Body>
          <Right />
        </Header>
        <Right>
        <Button transparent>
              <Icon name='search' />
            </Button>

        </Right>
        <Content>
          <Text>
            buenas
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const styles=create.StyleSheet({
    cab:{
      background: 'red'
    }

})