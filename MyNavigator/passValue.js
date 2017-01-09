import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  TextInput
} from 'react-native';

var InputPage = React.createClass({

  getInitialState : function() {
    return {
      //记录输入框的值
      content : " "
    }
  },

  getInputContent : function(inputText) {
    //将输入框的值记录下来
    this.setState({
      content : inputText
    })
  },

  pushNextPage : function() {
    var route = {
      component : DetailPage,
      passProps : {
        //将输入框的内容传递给下一级页面
        showText : this.state.content
      }
    }
    //进入下一个界面，并且传值
    this.props.navigator.push(route)
  },

  render : function() {
    return(
      <View style = {inputStyles.container}>
        <TextInput
          style = {inputStyles.input}
          placeholder = "please input some words"
          onChangeText = {this.getInputContent}/>
        <TouchableOpacity
            style = {inputStyles.btn}
            onPress = {this.pushNextPage}>
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
    )
  }
});

var inputStyles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center",
    backgroundColor : "white"
  },
  input : {
    height : 45,
    marginLeft : 25,
    marginRight : 25,
    paddingLeft : 5,
    borderWidth : 1,
    borderColor : "black",
    borderRadius : 4
  },
  btn : {
    marginTop : 20,
    height : 30,
    borderWidth : 1,
    borderRadius : 4,
    borderColor : "black",
    padding : 5,
    justifyContent : "center",
    alignItems : "center"
  }
});

//SecondPage
var DetailPage = React.createClass({

  popFromPage : function () {
    this.props.navigator.pop()
  },

  render : function() {
    return (
      <View style = {detailStyles.container}>
        <Text style = {detailStyles.text}>{this.props.showText}</Text>
        <TouchableOpacity
          style = {detailStyles.btn}
          onPress = {this.popFromPage}>
          <Text>返回上一页</Text>
        </TouchableOpacity>
      </View>
    )
  }
});

var detailStyles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center",
    backgroundColor : "white"
  },
  text : {
    marginLeft : 25,
    marginRight : 25,
    padding : 25,
    backgroundColor : "cyan",
    fontSize : 20,
    textAlign : "center"
  },
  btn : {
    marginTop : 20,
    height : 30,
    borderWidth : 1,
    borderRadius : 4,
    borderColor : "black",
    padding : 5,
    justifyContent : "center",
    alignItems : "center"
  }
});


var MyNavigator = React.createClass({
  render : function() {
    var rootRoute = {
      component : InputPage,
      //存储需要传递的内容
      passProps : {

      }
    }

    return (
      <View style = {{flex : 1}}>
        <Navigator
          initialRoute = {rootRoute}
          configureScence = {(route) => {
            return Navigator.SceneConfigs.PushFromRight
          }}
          renderScene = {(route,navigator) => {
            var Component = route.component;
            return (
              <Component
                navigator = {navigator}
                route = {route}
                //需要传值就得实现下面这段代码
                {...route.passProps}/>
            )
          }}/>
      </View>
    )
  }
});

var styles = StyleSheet.create({

});

module.exports = MyNavigator;
