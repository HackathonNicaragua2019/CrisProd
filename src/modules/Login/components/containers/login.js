import React, { Component } from 'react';
import { StyleSheet} from 'react-native'
import * as Facebook from 'expo-facebook';
import * as firebase from 'firebase';
import {FontAwesome, Entypo} from '@expo/vector-icons'
import { Icon, Input, Item,Container, Header, Button, Content, Card, CardItem, Text, Body,Left,Title, Right } from 'native-base';
export default class Login extends Component {
  constructor(props){
    super(props)
    this.state=(
      {
        email:'',
    
        password:''
      }
    )
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user!=null){
      console.log(user)
      }
    });
    
  }
  logInuser=(email,password)=>{
    try{
    if(this.state.password.length<6){
      alert("6 caracteres almenos")
      return;
    
    }
    firebase.auth().signInWithEmailAndPassword(email,password), then (function(user){console.log(user)})
    }
    catch(error){
      console.log(error.toString())
    }

    ;}
  
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
            <Title>Iniciar Sesión</Title>
          </Body>
          <Right />
          
        </Header>
        <Content padder contentContainerStyle={styles.content}>
          <Card>
            <CardItem header bordered>
              <Text style={styles.textCenter}>Inicio de sesion</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
              <Item floatingLabel>
              <Icon name='md-person' size={20} ></Icon>
              <Input placeholder='Correo electronico' onChangeText={(email)=>this.setState({email})}/>
              
            </Item>
            <Item floatingLabel last>
            <Icon active name='lock' size={20} ></Icon>
              <Input placeholder='Contraseña' onChangeText={(password)=>this.setState({password})}/>
            </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <Button rounded danger style={styles.boton} onPress={this.register}>
            <Text>Registrarse</Text>
          </Button>
            <Button rounded success style={styles.boton} onPress={()=>this.logInuser(this.state.email, this.state.password)}>
              <Text> Entrar </Text>
          
              </Button>
            </CardItem>
          </Card>
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
    
  }

  
}

)
