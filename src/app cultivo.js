import React from 'react'
import {createAppContainer} from 'react-navigation'
import Plantas from './layouts/plantasg'

import { createDrawerNavigator } from 'react-navigation-drawer';

//createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

import Maiz from '../src/plantas/maiz'

import { Dimensions} from 'react-native'

const WIDTH =Dimensions.get("window").width;
const Drawerconfig={
  drawerWidth:WIDTH*0.50,
}
const DrawerNavigator=createDrawerNavigator({
  
Plantas:{
  screen: Plantas

},
  Maiz:{

    screen:Maiz,
  
  }
 },
 Drawerconfig
);
export default createAppContainer(DrawerNavigator)
