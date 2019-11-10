import React from 'react'
import {createAppContainer} from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';
import Cerdos from './animales/cerdos'
import { Dimensions} from 'react-native'


const WIDTH =Dimensions.get("window").width;
const Drawerconfig={
  drawerWidth:WIDTH*0.50,
}
const DrawerNavigator=createDrawerNavigator({
  
  Cerdos:{
    screen:Cerdos,
    
  },
  
  
 },
 Drawerconfig
);
export default createAppContainer(DrawerNavigator)
