import React from 'react'
import {createAppContainer} from 'react-navigation'
import {ScrollView, Text, View, StyleSheet, Image} from 'react-native'

import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';

//createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);
import Login from './modules/Login/components/containers/login'
import Register from './modules/Login/components/containers/register'
import Home from './modules/Login/components/containers/home'
import Ajuste from './modules/Login/components/containers/config'
import Cultivos from './app cultivo'
import { Dimensions} from 'react-native'
import * as firebase from 'firebase';

//import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';


const firebaseConfig = {
  apiKey: "AIzaSyAvvbN6gPSwt_HrnYU1nN8wsYayZ9kygtc",
  authDomain: "prueba-1-93c7b",
  databaseURL: "https://prueba-1-93c7b.firebaseio.com",
  storageBucket: "prueba-1-93c7b.appspot.com"
};

firebase.initializeApp(firebaseConfig);


import Slidebar from "./slidebar"
import home from './modules/Login/components/containers/home';




const WIDTH =Dimensions.get("window").width;
const Drawerconfig={
  drawerWidth:WIDTH*0.50,
}
const DrawerNavigator=createDrawerNavigator({

    
  
  Home:{
    screen: Home
  },
  Cultivos:{
    screen: Cultivos
  },
  Login:{
    screen: Login,
  },
  Register:{
    screen: Register
  },
  Ajuste: {
    screen: Ajuste
  }
 },
 
{
  contentComponent:props=><Slidebar{...props}/>,
  Drawerconfig
}
);
export default createAppContainer(DrawerNavigator)
