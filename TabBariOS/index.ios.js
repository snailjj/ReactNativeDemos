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
  View,
  TabBarIOS
} from 'react-native';

/*
  在ReactNative中，实现页面切换，提供了两个组件，TaBarIOS和TabBarIOS.Item


*/

var LessonInput = require("./input");
var LessonImage = require("./loadImage");
var LessonMovies = require("./movieList");

var TabBariOS = React.createClass({

  getInitialState : function() {
    return {
      //用于记录显示页面组件对应的title
      tab : "LessonInput"
    };
  },

  //tabBarIOS.Item的onPress的处理方法
  select : function(tabName){
    this.setState({
      tab : tabName
    });
  },

  render : function() {
    return (
      <TabBarIOS style = {{flex : 1}}>
        <TabBarIOS.Item
          title = "Input"
          icon = {require("image!1")}
          onPress = {this.select.bind(this, "LessonInput")}
          selected = {this.state.tab === "LessonInput"}>
          <LessonInput></LessonInput>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title = "Image"
          systemIcon = "bookmarks"
          onPress = {this.select.bind(this, "LessonImage")}
          selected = {this.state.tab === "LessonImage"}>
          <LessonImage></LessonImage>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title = "Movie"
          icon = {require("image!2")}
          onPress = {this.select.bind(this, "LessonMovies")}
          selected = {this.state.tab === "LessonMovies"}>
          <LessonMovies></LessonMovies>
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
})

AppRegistry.registerComponent('TabBariOS', () => TabBariOS);
