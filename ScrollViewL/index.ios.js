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

//练习1 实现ScrollView基本功能
var ScrollViewL = require("./myScrollView");

//练习2 电影列表
var ScrollViewL = require("./movieList");

AppRegistry.registerComponent('ScrollViewL', () => ScrollViewL);
