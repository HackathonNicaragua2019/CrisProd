import React from 'react'
import {createAppContainer} from 'react-navigation'
import Plantas from './layouts/plantasg'
import Maiz from './plantas/maiz'
import Apio from './plantas/apio'
import Cebolla from './plantas/cebolla'
import Papaya from './plantas/papaya'
import Sabila from './plantas/sabila'


import { createDrawerNavigator } from 'react-navigation-drawer';
import Tomate from './plantas/tomate'

//createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);
import Slidebar from "./slidebar"

import { Dimensions} from 'react-native'

const WIDTH =Dimensions.get("window").width;
const Drawerconfig={
  drawerWidth:WIDTH*0.50,
}
const DrawerNavigator=createDrawerNavigator({
  
Plantas:{
  screen: Plantas

},
Tomate:{
  screen:Tomate
},
Maiz:{
  screen: Maiz
},
Papaya:{
  screen:Papaya
},
Apio:{
  screen: Apio
},
Sabila:{
  screen: Sabila
},
Cebolla:{
  screen: Cebolla
}
 
 },
 {contentComponent:props=><Slidebar{...props}/>,
 Drawerconfig
}
);
export default createAppContainer(DrawerNavigator)
