import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

var LessonImage = React.createClass({
  render : function() {
    return(
      <View style = {styles.container}>
        <View style = {styles.net}>
          <Image
            style = {styles.netImage}
            source = {{url : "http://www.snailjj.com/assets/images/favicon.png"}}/>
        </View>
        <View style = {styles.local}>
          <Image
            style = {styles.locakImage}
            source = {require("image!3")}/>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container : {
    flex : 1,
    margin : 25,
    alignItems : "center"
  },

  net : {
    marginTop : 30,
    width : 300,
    height : 240,
    justifyContent : "center",
    backgroundColor : "cyan"
  },

  netImage : {
    width : 280,
    height : 200,
    backgroundColor : "cyan"
  },

  locak : {
    marginTop : 30,
    width : 300,
    height : 200,
    justifyContent : "center",
    backgroundColor : "cyan"
  },

  locakImage : {
    width : 180,
    height : 180,
    backgroundColor : "cyan"
  },

});

module.exports = LessonImage;
