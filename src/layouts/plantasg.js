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
            <Title>Cultivos</Title>
          </Body>

          <Right />
          
        </Header>
        <Content padder contentContainerStyle={styles.content}>
          <ScrollView>
          <Card>
            <CardItem header bordered>
              <Text style={styles.textCenter}>Tomate</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
           <Item>
             <Image source={require('../../assets/tomate.jpg')}style={styles.imagen} />
             </Item>
             <Item style={{marginTop: 20}}>
             <Text style={{fontSize:18}}>
               
             El tomate es en realidad una fruta, aunque la mayoría de la gente considera que es un vegetal. De hecho, el tomate es la fruta más popular del mundo. Su diversidad es un factor importante en su popularidad, pero el tomate es un alimento nutritivo que contiene vitamina A y vitamina C y licopeno, un antioxidante que combate el cáncer
             </Text>
              
            </Item>
              </Body>
           </CardItem>
           </Card>
           <Card>
            <CardItem header bordered>
              <Text style={styles.textCenter}>Cebolla</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
           <Item>
             <Image source={require('../../assets/cebolla.jpg')}style={styles.imagen}/>
             </Item>
             <Item style={{marginTop: 20}}>
             <Text style={{fontSize:18}}>
             Las cebollas necesitan suelos buenos y ricos para desarrollarse. Prefieren los suelos franco arenosos, la turba y el limo rechazan los suelos arcillos y arenosos.
             </Text>
              
            </Item>
              </Body>
           </CardItem>
           </Card>
           <Card>
            <CardItem header bordered>
              <Text style={styles.textCenter}>Papaya</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
           <Item>
             <Image source={require('../../assets/papaya.jpg')}style={styles.imagen}/>
             <Text style={{fontSize:18}}>
             Para obtener las mejores condiciones para el crecimiento de su papaya en su jardín, no olvide elegir bien el lugar de la plantación. 
             </Text>
              
            </Item>
              </Body>
           </CardItem>
           </Card>
           <Card>
            <CardItem header bordered>
              <Text style={styles.textCenter}>Maiz</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
           <Item>
             <Image source={require('../../assets/maiz.png')}style={styles.imagen}/>
             </Item>
             <Item>
             <Text style={{fontSize:18}}>
               
             Un consejo sobre como sembrar maíz es que el polen es trasportado por el viento, razón por la cual es mejor plantarlo en grupo. Esto va a ayudar a la germinación del polen.
             </Text>
              
            </Item>
              </Body>
           </CardItem>
           </Card>
           <Card>
            <CardItem header bordered>
              <Text style={styles.textCenter}>Sabila</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
           <Item>
             <Image source={require('../../assets/tomate.jpg')}style={styles.imagen}/>
             <Text style={{fontSize:18}}>i deseas trasplantar una planta joven (o plantón) que crece en la base de una planta más vieja, lee la sección de propagación.</Text>
              
            </Item>
              </Body>
           </CardItem>
           </Card>
           <Card>
            <CardItem header bordered>
              <Text style={styles.textCenter}>Apio</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
           <Item>
             <Image source={require('../../assets/apio.jpg')}style={styles.imagen}/>
             <Text style={{fontSize:18}}>Son numerosos los usos del apio en la cocina debido a todas propiedades de este vegetal que puede echarnos una mano en diversas afecciones o a la hora de perder peso.</Text>
              
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
    alignItems: 'center'
  }

  
}

)
