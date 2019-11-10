import React,{Component} from 'react';
import { View, StyleSheet, ScrollView, Image,} from 'react-native';
import { CardItem,Input,Title,Header,Container, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Icon,Card, InputGroup } from 'native-base';
import { createAppContainer } from 'react-navigation';

export default class Princ extends Component {

 

    Menu= () => {
      this.props.navigation.navigate('Menu')}
   
    render() {
      
      return (
        <Container>
          <Header transparent searchBar rounded style={styles.tema} >
            <Left>
              <Button transparent>
                <Icon name='menu' size={50} onPress={()=>this.props.navigation.toggleDrawer()}/>
              </Button>
            </Left>
            <Body>
              <Title>Inicio</Title>
              <InputGroup>
              <Icon name='ios-search'/>
              <Input placeholder ='Buscar'/>
              </InputGroup>
              
              
            </Body>
            <Right>
            <Button transparent>
                <Text>Buscar</Text>
              </Button>
            </Right>
          </Header>
          <Content style={{backgroundColor:"#bbe8ff"}}>
            <ScrollView>
              <View style={{alignItems:'center'}}>
                <Text style={{fontWeight:'bold', fontSize:19, marginTop:30}}>Bienvenidos a Crisprod</Text>
              </View>
              <View style={{alignItems:'center'}}>
              <Image style={{width:180, height:162, marginTop:30}} source={require('../../../../assets/Logoc.png')} />
              </View>
              <View style={{alignItems:'center'}}>
                <Text style={{fontWeight:'bold', fontSize:18, marginTop:30}}>Eres capaz de Emprender!!!</Text>
              </View>
              <View><Card style={{marginLeft:18,marginRight:10, marginTop:20}}>
                <CardItem>
                <Text style={{ fontSize:14, marginTop:5,fontWeight:'bold'}}>Paso 1:</Text>
                <Text style={{ fontSize:14, marginTop:5,marginLeft:20,marginRight:20}}>Toca el boton superior izquierdo para abrir el menu desplegable.</Text>
                </CardItem>
                <CardItem>
                <Text style={{ fontSize:14, marginTop:5,fontWeight:'bold'}}>Paso 2:</Text>
                <Text style={{ fontSize:14, marginTop:5,marginLeft:20,marginRight:20}}>Escoge la actividad que deseas realizar(Siembra o Crianza).</Text>
                </CardItem>
                <CardItem>
                <Text style={{ fontSize:14, marginTop:5,fontWeight:'bold'}}>Paso 3:</Text>
                <Text style={{ fontSize:14, marginTop:5,marginLeft:20,marginRight:20}}>Escoge la planta o animal que desea.</Text>
                </CardItem>
                <CardItem>
                <Text style={{ fontSize:14, marginTop:5,fontWeight:'bold'}}>Paso 4:</Text>
                <Text style={{ fontSize:14, marginTop:5,marginLeft:20,marginRight:20}}>Sigue los consejos paso a paso de la aplicacion.</Text>
                </CardItem>
                <CardItem>
                <Text style={{ fontSize:14, marginTop:5,fontWeight:'bold'}}>Paso 5: </Text>
                <Text style={{ fontSize:14, marginTop:5,marginLeft:20,marginRight:20}}> Conectate con los diferentes organismos y vende tu producto.</Text>
                </CardItem>
                </Card></View>

            </ScrollView>
        </Content>
        <View style={styles.linea}></View>
        </Container>
      );
    }
  }
  const styles=StyleSheet.create({
    body:{
     
    },
    linea:{
      flex: 0.009,
      backgroundColor:"#c0cd9f",
    },
    textCenter :{
      textAlign : 'center',
      width : '100%'
    },
    content:{
      flex:1,
      backgroundColor:"#D9FAFE",
  
    },
    boton:{
        marginEnd:0,
    },
    texcol:{
        backgroundColor: '#a2c04e'
    },
    bodr: {
        backgroundColor: '#d4d5d5'
    },
    logo:{
        width:40,
        height: 40,
        borderRadius: 90 ,
        resizeMode: 'contain'
        },
        headf:{
          flex: 6,
        },
        tema:{
          backgroundColor:'#a2c04e',
          marginTop:24.1,
           height: 80,

        }, 
        bajo:{
          backgroundColor: '#505050'
        },
         content:{
    flex:1,
    justifyContent: 'center'

  }, content:{
    flex:1,
    justifyContent: 'center'

  },
  container:{
    flex:1,
    flexDirection: "column",
    color:'white',
  
  },
  
    
  }
  
  )
  