import React,{Component} from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import { CardItem,Card,Input,Title,Header,Container, Content, Footer, FooterTab, Button, Left, Right, Body, Text, Icon, InputGroup } from 'native-base';
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
            <View><Card style={{marginLeft:18,marginRight:10, marginTop:20}}>
                <CardItem>
                <Text style={{ fontSize:14, marginTop:5,fontWeight:'bold'}}>Funica:</Text>
                <Text style={{ fontSize:14, marginTop:5,marginLeft:20,marginRight:20}}>Telefono: 2276-1313 Correo:funica@ibw.com.ni</Text>
                </CardItem>
                <CardItem>
                <Text style={{ fontSize:14, marginTop:5,fontWeight:'bold'}}>Funide:</Text>
                <Text style={{ fontSize:14, marginTop:5,marginLeft:20,marginRight:20}}>Telefono: 2270-6490 Correo: info@funides.com</Text>
                </CardItem>
                <CardItem>
                <Text style={{ fontSize:14, marginTop:5,fontWeight:'bold'}}>UNAG:</Text>
                <Text style={{ fontSize:14, marginTop:5,marginLeft:20,marginRight:20}}>Telefono:  2346-2280 Correo: unag@unag.org.ni</Text>
                </CardItem>
                <CardItem>
                <Text style={{ fontSize:14, marginTop:5,fontWeight:'bold'}}>Cosep:</Text>
                <Text style={{ fontSize:14, marginTop:5,marginLeft:20,marginRight:20}}>Telefono: 2276-3333 Correo: relacionespublicas@cosep.org.ni</Text>
                </CardItem>
                <CardItem>
                <Text style={{ fontSize:14, marginTop:5,fontWeight:'bold'}}>Mefca:</Text>
                <Text style={{ fontSize:14, marginTop:5,marginLeft:20,marginRight:20}}>Telefono:8710-1518  Correo:lrivera@economiafamiliar.gob.ni</Text>
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