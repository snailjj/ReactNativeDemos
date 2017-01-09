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

/*
  常用属性
    onPress 手机触摸事件
    numberOfLines 显示多少行
*/
//引入Header
var Header = require("./header");
var News = require("./news");

var LessonText = React.createClass({
  render : function () {

    //定义一个数组
    var news = [
      "1.dsasdasasd",
      "1.dsasdasasd",
      "1.dsasdasasd",
      "1.dsasdasasd"
    ];

    return (
      <View style = {styles.flex}>
        {/* header */}
        <Header></Header>
        {/* News */}
        <News news = {news}></News>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  flex : {
    flex : 1
  }
});

AppRegistry.registerComponent('LessonText', () => LessonText);
