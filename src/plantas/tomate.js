import React, { Component } from 'react';
import { StyleSheet,KeyboardAvoidingView, Image} from 'react-native'
import { Icon, Input, Item,Container, Header, Button, Content, Card, CardItem, Text, Body,Left,Title, Right } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
export default class Login extends Component {
  
register= () => {
  this.props.navigation.navigate('Register')}
  home= () => {
    this.props.navigation.navigate('Home')}


    
  render() {
    return (
      <Container>
        
         <Header style={styles.tema}>
        <Left>
            <Button transparent>
              <Icon name='ios-arrow-back' onPress={this.home}/>
            </Button>
          </Left>
          <Body>
            <Title>Tomates</Title>
          </Body>

          <Right />
          
        </Header>
        <Content padder contentContainerStyle={styles.content}>
          <ScrollView>
          <Card>
            <CardItem header bordered>
              <Text style={styles.textCenter} style ={{fontSize:22}}>El tomate es en realidad una fruta, aunque la mayoría de la gente considera que es un vegetal. De hecho, el tomate es la fruta más popular del mundo. Su diversidad es un factor importante en su popularidad.</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
           <Item>
             <Image source={require('../../assets/tomate.jpg')}/>
            
              
            </Item>
              </Body>
           </CardItem>
           </Card>
           </ScrollView>
        </Content>
        
      </Container>
    );
  }
}
const styles=StyleSheet.create({
  textCenter :{
    textAlign : 'center',
    width : '100%'
  },
  content:{
    flex:1,
    justifyContent: 'center'

  },
  boton:{
    marginLeft : '12%'
  },
  tema:{
    backgroundColor:'#a2c04e',
    marginTop:24.5,
    height: 80,

    
  }, 
  imagen:{
    width:50,
    height:50,
  }

  
}

)
