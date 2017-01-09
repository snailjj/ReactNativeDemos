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

var FlexBox = React.createClass({
  render : function () {
    return (
      <View style = {styles.container}>
        <View style = {styles.child1}></View>
        <View style = {styles.child2}></View>
      </View>
    );
  }
});
//
//
// var styles = StyleSheet.create({
//   container : {
//     margin : 30,
//     width : 300,
//     height : 500,
//     backgroundColor : "yellow",
//     //默认主轴方向是column 设置为横向排列
//     flexDirection : "row",
//     //主轴方向
//     justifyContent : "center",
//     //jiao cha zhou
//     alignItems : "center"
//   },
//   child1 : {
//     width : 100,
//     height : 100,
//     backgroundColor : "green"
//   },
//
//   child2 : {
//     width : 100,
//     height : 100,
//     backgroundColor : "blue"
//   }
// })

  /*
    flex
    可以给组件指定flex，flex的值可以是数字，flex：1表示组件可以撑满父控件所有的剩余空间
    同时存在多个并列的子组件，都设置flex：1，就会均分
    如果这些并列都子组件的flex不一样，谁的值更大，占的剩余空间比例就更大
  */

  var styles = StyleSheet.create({
    container : {
      marginTop : 30,
      marginBottom : 10,
      flex : 1,
      backgroundColor : "cyan"
    },

    child1 : {
      flex : 3,
      backgroundColor : "green"
    },

    child2 : {
      flex : 3,
      backgroundColor : "yellow"
    }
  })

AppRegistry.registerComponent('FlexBox', () => FlexBox);
