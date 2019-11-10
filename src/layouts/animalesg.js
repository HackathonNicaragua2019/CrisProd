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
            <Title>Cria</Title>
          </Body>

          <Right />
          
        </Header>
        <Content padder contentContainerStyle={styles.content}>
          <ScrollView>
          <Card>
            <CardItem header bordered>
              <Text style={styles.textCenter}>Gallinas</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
           <Item>
             <Image source={require('../../assets/gallina.jpg')}style={styles.imagen} />
             </Item>
             <Item style={{marginTop: 20}}>
             <Text style={{fontSize:18}}>
               
             Un gallo sólo se necesita si usted cría pollos para aprovechar su carne.       </Text>
              
            </Item>
              </Body>
           </CardItem>
           </Card>
           <Card>
            <CardItem header bordered>
              <Text style={styles.textCenter}>Cerdos</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
           <Item>
             <Image source={require('../../assets/cerdo.jpg')}style={styles.imagen}/>
             </Item>
             <Item style={{marginTop: 20}}>
             <Text style={{fontSize:18}}>
             La crianza de cerdos puede representar una fuente importante de entusiasmo, alegría e ingresos si se hace de forma racional y escalable. </Text>
              
            </Item>
              </Body>
           </CardItem>
           </Card>
           <Card>
            <CardItem header bordered>
              <Text style={styles.textCenter}>Pollos</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
           <Item>
             <Image source={require('../../assets/pollo.jpg')}style={styles.imagen}/>
             <Text style={{fontSize:18}}>
             Engorde o finalización: va desde la cuarta hasta la sexta semana de vida (42 días).
             </Text>
              
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
    width:70,
    height:70,
    alignItems: 'center'
  }

  
}

)
