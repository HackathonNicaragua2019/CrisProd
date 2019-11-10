import React, { Component } from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Publicaciones from '../../extra/Post';
import Clima from '../../extra/weath';
import Conectate from '../../extra/Connect';
import Inicio from '../../extra/Princ';
import Icon from 'react-native-vector-icons/FontAwesome'


const AppNav = createBottomTabNavigator({
  Inicio:{
    screen: Inicio, 
    navigationOptions:({navigation})=>({
      tabBarIcon:({focused,tintColor})=>{
        return <Icon name="home" size={23} color={tintColor}/>
      }
    })
  },
  Publicaciones:{
    screen: Publicaciones,
    navigationOptions:({navigation})=>({
      tabBarIcon:({focused,tintColor})=>{
        return <Icon name="edit" size={23} color={tintColor}/>
      }
    })
  },
  Clima:{
    screen: Clima,
    navigationOptions:({navigation})=>({
      tabBarIcon:({focused,tintColor})=>{
        return <Icon name="snowflake-o" size={23} color={tintColor}/>
      }
    })
  },
  Conectate:{
    screen: Conectate,
    navigationOptions:({navigation})=>({
      tabBarIcon:({focused,tintColor})=>{
        return <Icon name="chain" size={23} color={tintColor}/>
      }
    })
  },
}, {
  initialRouteName:'Inicio',
  tabBarOptions:{
    activeTintColor:"yellow",
    activeBackgroundColor:"transparent",
    labelStyle:{
       fontSize:12
    },
    /*showlabel:false,*/
    style:{
      backgroundColor:"#505050"
    }
  }
})

export default createAppContainer(AppNav);
