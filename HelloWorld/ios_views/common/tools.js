//定义多个属性

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions, //获取设备屏幕的宽高
  ActivityIndicator
} from 'react-native';


var Tool = {
  //屏幕尺寸
  windowSize : {
    width : Dimensions.get("window").width,
    height : Dimensions.get("window").height
  },

  //基于Fetch的方法 只负责下载数据 下载后的处理操作在回调方法中实现
  getRequest : function(url,successCallback,failureCallback) {
    fetch(url)
    .then((res) => res.json())
    .then((resData) => successCallback(resData))
    .catch((error) => failureCallback(error));
  },

  //loading效果
  loading : <ActivityIndicator style = {{marginTop : 200}}/>

}

module.exports = Tool;
