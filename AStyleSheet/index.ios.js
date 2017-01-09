/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var lessonStyle = React.createClass({
  render : function() {
    return {
      <View Style = {styles.container}>
        <View Style = {styles.top}></View>
        <View></View>
        <View></View>
      </View>
    }
  }
})

var Style = StyleSheet.create({
  container : {
    backgroundColor : "red",
    width : 300,
    height : 400,
  },

  top : {
    backgroundColor : "green",
    width : 280,
    height : 300,
    margin : 10,
    borderColor : "black"
    borderWidth : 21
  }

  bottom : {
    backgroundColor : "yellow",
    width : 200,
    margin : 10
  }

})

var AStyleSheet = React.createClass({
  render() {
    return (
      <View style = {styles.container}>
        <View style = {[styles.top,styles.border]}>

        </View>
        <View style = {[styles.bottom,styles.border,{borderWidth : 20}]}>

        </View>
      </View>
    )
  }
})

//定义
 var styles = StyleSheet.create({

   //外层View
   container : {
     marginTop : 25,
     marginLeft : 30,
     backgroundColor : "red",
     width : 300,
     height :400,
   },
   top : {
     backgroundColor : "yellow",
     width : 280,
     height : 250,
     margin : 10,
   },
   bottom : {
     backgroundColor : "green",
     width : 280,
     height : 110,
     margin : 10,
   },
   border : {
     borderWidth : 3,
     borderColor : "black"
   }
 });

AppRegistry.registerComponent('AStyleSheet', () => AStyleSheet);
