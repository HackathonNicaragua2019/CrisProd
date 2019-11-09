import React from 'react'
import {createAppContainer} from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from './modules/home' 
import Login from './modules/login'
import Registro from './modules/registro'
import { Dimensions} from 'react-native'


const WIDTH =Dimensions.get("window").width;
const Drawerconfig={
  drawerWidth:WIDTH*0.50,
}
const DrawerNavigator=createDrawerNavigator({
  
  Home:{
    screen:Home,
    
  },
  
  Login:{
    screen: Login,
  },
  Registro:{
    screen: Registro
  },
  
 },
 Drawerconfig
);
export default createAppContainer(DrawerNavigator)
