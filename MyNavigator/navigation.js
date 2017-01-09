import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';


//定义第一个界面， firstPage 一个btn 点击进入下一个界面
var FirstPage = React.createClass({
  //按钮omPress事件处理方法
  pressPush : function() {
    //推出下一级页面
    var nextRoute = {
      component : SecondPage
    };
    this.props.navigator.push(nextRoute)
  },

  render : function() {
    return(
      <View style = {[styles.flex,{backgroundColor : "yellow"}]}>
        <TouchableOpacity
            style = {styles.btn}
            onPress = {this.pressPush}>
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
    )
  }

});

//第二个界面 点击返回上一个界面
var SecondPage = React.createClass({
  pressPop : function() {
    this.props.navigator.pop();
  },

  render : function () {
    return(
      <view style = {styles.flex}>
        <TouchableOpacity
            onPress = {this.pressPop}
            style = {styles.btn}>
          <Text>pop</Text>
        </TouchableOpacity>
      </view>
    )
  }
});

var MyNavigator = React.createClass({
  render : function() {

    var rootRoute = {
      component : FirstPage
    };

    return(
      <Navigator
        /*
          1.initialRoute 初始化路由对象 默认的显示的界面，也就是Root界面，
          对象的属性是自定义的，这个对象中的内容会在renderScence方法中处理

          备注：必须包含的属性，即component，表示需要渲染的页面组件

        */
        initialRoute = {rootRoute}

        /*
          2.configureScence，场景渲染的配置
        */
        configureScence = {(route) => {
          return Navigator.SceneConfigs.pushFromRight;
        }}

        /*
          3.renderScence :渲染场景
          有参数：1、route：第一步创建并设置给导航器的路由对象，2、navigator就是导航对象
          实现 给需要显示的组件设置属性
        */
        renderScene = {(route,navigator) => {
          //从route对象中获取页面组件
          var Component = route.component
          return (
            <Component
              navigator = {navigator}
              route = {route}/>
          );
        }}

        />
    );
  }
});

var styles = StyleSheet.create({
  flex : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center"
  },

  btn : {
    width : 150,
    height : 30,
    borderColor : "#0089FF",
    borderWidth : 1,
    borderRadius : 3,
    justifyContent : "center",
    alignItems : "center"
  }
})

module.exports = MyNavigator;
