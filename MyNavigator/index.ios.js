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

*/

//实现导航功能，页面切换
// var MyNavigator = require("./navigation")


//实现导航功能，传值
var MyNavigator = require("./passValue")

AppRegistry.registerComponent('MyNavigator', () => MyNavigator);
