import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  Image
} from 'react-native';


/*
  ScrollView 简单实现

  1、实现检测拖拽，滑动的方法
  2、添加几个子组件
*/


var MyScrollView = React.createClass({

  _onScrollBeginDrag : function() {
    console.log("start drag");
  },

  _onScrollEndDrag : function() {
    console.log("end drag");
  },

  _onMomentumScrollBegin : function() {
    console.log("_onMomentumScrollBegin");
  },

  _onMomentumScrollEnd : function() {
    console.log("_onMomentumScrollEnd");
  },

  _onRefresh : function() {
    console.log("_onRefresh");
  },

  render : function() {
    return(
      <View style = {styles.container}>
        <ScrollView
          style = {styles.scrollView}
          showVerticalScrollIndicator = {true}
          onScrollBeginDrag = {this._onScrollBeginDrag}
          onScrollEndDrag = {this._onScrollEndDrag}
          onMomentumScrollBegin = {this._onMomentumScrollBegin}
          onMomentumScrollEnd = {this._onMomentumScrollEnd}
          refreshControl = {
            <RefreshControl
            refreshing = {false}
            tintColor = "green"
            title = "refresing"
            onRefresh = {this._onRefresh}/>
          }>
          <View style = {styles.view_1}></View>
          <View style = {styles.view_2}></View>
          <View style = {styles.view_3}></View>
        </ScrollView>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "cyan"
  },

  scrollView : {
    marginTop : 25,
    backgroundColor : "red"
  },

  view_1 : {
    margin : 15,
    flex : 1,
    height : 300,
    backgroundColor : "yellow"
  },

  view_2 : {
    margin : 15,
    flex : 1,
    height : 300,
    backgroundColor : "green"
  },

  view_3 : {
    margin : 15,
    flex : 1,
    height : 300,
    backgroundColor : "yellow"
  },

})

module.exports = MyScrollView;
