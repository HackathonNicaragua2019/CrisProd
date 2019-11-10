import React, { Component } from 'react';
import { StyleSheet, Alert, KeyboardAvoidingView} from 'react-native'
import { Icon,Title,Right, Left, Input, Item,Container, Header, Button, Content, Card, CardItem, Text, Body } from 'native-base';
import * as firebase from 'firebase';



export default class Register extends Component {
constructor(props){
  super(props)
  this.state=(
    {
      email:'',
      password:''
    }
  )
}
signUpuser=(email,password)=>{
try{
if(this.state.password.length<6){
  alert("6 caracteres almenos")
  return;
}
if(this.state.password.length>=6){
  alert("Usuario registrado")
  
}
firebase.auth().createUserWithEmailAndPassword(email,password)
}
catch(error){
  console.log(error.toString())
};

}


 
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
            <Title>Registro</Title>
          </Body>
          <Right />
        </Header>
        <Content padder contentContainerStyle={styles.content}>
        <KeyboardAvoidingView style={styles.content} behavior="padding" enabled>
          <Card>
          
            <CardItem header bordered>
              <Text style={styles.textCenter}>Registro</Text>
       
            </CardItem>
            <CardItem bordered>
              <Body>
              <Item floatingLabel>
              <Icon name='md-person' size={20} ></Icon>
              <Input placeholder='expample: juan@gmail.com'
              onChangeText={(email)=>this.setState({email})}/>
              
            </Item>
            <Item floatingLabel>
              <Icon name='md-person' size={20} ></Icon>
              <Input placeholder='Usuario' />
              
            </Item>
            <Item floatingLabel last>
            <Icon name='key' size={20} ></Icon>
              <Input secureTextEntry={true} placeholder='Contraseña' onChangeText={(password)=>this.setState({password})}/>
            </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <Button full success onPress={()=>this.signUpuser(this.state.email, this.state.password)}>
            <Text>Registrarse</Text>
          </Button >
          
          
           
            </CardItem>
            
            <Text style={{textAlign: 'center'}}>O</Text>
            
            <Button full danger >
            <Text>Registrarse con gmail</Text>
          </Button >
          </Card>
          </KeyboardAvoidingView>
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
    marginLeft : '40%'
  },
  tema:{
    backgroundColor:'#a2c04e',
    marginTop:24.5,
    height: 80,
  },
  face:{
    backgroundColor: 'blue'
  }
  
  
}

)
