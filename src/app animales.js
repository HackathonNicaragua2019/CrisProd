import React from 'react'
import {createAppContainer} from 'react-navigation'
import Animales from './layouts/animalesg'
import Gallinas from './animales/gallina'
import Cerdos from './animales/cerdos'
import Pollos from './animales/pollo'

import { createDrawerNavigator } from 'react-navigation-drawer';

//createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);
import Slidebar from "./slidebar"

import { Dimensions} from 'react-native'

const WIDTH =Dimensions.get("window").width;
const Drawerconfig={
  drawerWidth:WIDTH*0.50,
}
const DrawerNavigator=createDrawerNavigator({
  
Animales:{
  screen: Animales

},
Gallinas:{
  screen:Gallinas
},
Cerdos:{
  screen: Cerdos
},
Pollos:{
  screen:Pollos
},


 
 },
 {contentComponent:props=><Slidebar{...props}/>,
 Drawerconfig
}
);
export default createAppContainer(DrawerNavigator)
