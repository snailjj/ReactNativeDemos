import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


//组件
var News = React.createClass({

  show : function(title) {
    alert(title);
  },


  render : function() {
    //定义数组，用于存储设置好的Text组件
    var newsComponents = [];
    //遍历存储信息的数组
    for (var i in this.props.news) {
      var text = (
        <Text
          onPress = {this.show.bind(this, this.props.news[i])}
          style = {styles.news_Item}
          numberOfLines = {2}
          key = {i}>
          {this.props.news[i]}
        </Text>
      );
      newsComponents.push(text)
    }

    return (
      <View style = {styles.flex}>
        <Text style = {styles.news_Title}>今日要闻</Text>
        {newsComponents}
      </View>
    );
  }
});


//样式
var styles = StyleSheet.create({
  flex : {
    flex : 1
  },

  news_Title : {
    fontSize : 20,
    fontWeight : "bold",
    color : "#CD1D1C",
    marginTop : 15,
    marginLeft : 10
  },

  news_Item : {
    marginLeft : 10,
    marginTop : 10,
    marginRight : 10,
    fontSize : 15,
    lineHeight : 30
  }

});

//导出模块
module.exports = News;
