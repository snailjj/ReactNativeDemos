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

// 在ReactNative中，使用Fetch实现网络请求


//练习一，使用Get和Post方式请求获取数据
// var FetchFirst = require("./getData")

//练习二，电影列表
var FetchFirst = require("./moviesList")

AppRegistry.registerComponent('FetchFirst', () => FetchFirst);
