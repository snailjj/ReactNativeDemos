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
  TabBarIOS,
  StatusBar
} from 'react-native';

//隐藏状态栏
StatusBar.setHidden(true);

//TabBarIOS 管理两个模块 图书和电影
var HelloWorld = React.createClass({
  getInitialState : function() {
    return {
      selectedTab : "图书"
    };
  },

  render : function() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title = "图书"
          selected = {this.state.selectedTab === "图书"}
          onPress = {() => {
            this.setState({
              selectedTab : "图书"
            })
          }}>
          <View style = {{backgroundColor : "cyan",flex : 1}}></View>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title = "电影"
          selected = {this.state.selectedTab === "电影"}
          onPress = {() => {
            this.setState({
              selectedTab : "电影"
            })
          }}
          icon = {require('./movie.png')}
          >
          <View style = {{backgroundColor : "yellow",flex : 1}}></View>
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }

});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
