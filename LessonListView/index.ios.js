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

//lianxi1 : LessonListView

// var LessonListView = require("./myListView")


//Lianxi 2 : dianying liebiao
var LessonListView = require("./movieList")

AppRegistry.registerComponent('LessonListView', () => LessonListView);
