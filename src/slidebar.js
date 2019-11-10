import React from 'react'
import {createAppContainer} from 'react-navigation'
import {ScrollView, Text, View, StyleSheet, Image} from 'react-native'

import { createDrawerNavigator, DrawerItems, DrawerNavigatorItems } from 'react-navigation-drawer'

import { Dimensions, ImageBackground} from 'react-native'
import * as firebase from 'firebase';


export default Slidebar =props=>(
    <ScrollView>
        <ImageBackground
        source={require('../assets/facebook.jpg')}
        style={{width: undefined, padding:16, paddingBottom:60, paddingTop:100}}>
    <Image source={require("../assets/Logo.png")} style={styles.porfile}/>
    <Text style ={styles.name}>Evert Meneses</Text>
    <View style={{flexDirection: "row"}}>
        <Text style={styles.follower}>734 Followers></Text>
    </View>
    </ImageBackground>
    <View style={styles.container}>
        <DrawerNavigatorItems{...props}/>

 
    </View>



    </ScrollView>
);
const styles=StyleSheet.create({
    container:{
       flex:1
    },
    porfile:{
        width:80,
        height:80,
        borderRadius:40,
        borderWidth: 3,
        borderColor:'red'
    },
    name:{
        color: 'black'

    },
    follower:{
        color: "rgba(255,255,255,0.8)",
        fontSize: 13,
        marginTop: 4,
    }
})
