import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

//封装导航器初始化设置
var Navigation = React.createClass({
  render : function() {
    //创建root对象，约定格式
    var rootRoute = {
      component : this.props.component,
      passProps : {

      }
    };

    return (
      <Navigator
        initialRoute = {rootRoute}
        configureScene = {() => {return Navigator.SceneConfigs.PushFromRight}}
        renderScene = {(route,navigator) => {
          var Component = route.component;
          return (
            <View style = {{flex : 1}}>
              <Component
                navigator = {navigator}
                route = {route}
                {...route.passProps}/>
            </View>
          );
        }}/>
    );
  }
});


var styles = StyleSheet.create({

});

module.exports = Navigation;
