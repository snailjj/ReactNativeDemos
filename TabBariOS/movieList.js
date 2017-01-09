import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  Image
} from 'react-native';

/*
  data url = "https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json"
*/
//从文件读取数据。下面语句其实执行了JSON.parse()方法，将JSON格式的文件转换为JSON对象
var movieData = require("./data.json");

//获取所有moives数据，属性movie是一个数组
var movies = movieData.movies;

var LessonMovies = React.createClass({

  render : function() {

    //创建电影列表组件，根据movies中元素的个数，创建对应的组件
    //遍历数组，每当获取一个movie对象，就创建一个组件对象，样式一样，显示内容不一样

    //定义空数组，存储显示电影信息的组件
    var movieRows = [];

    //遍历数组
    for (var i in movies) {
      //huo qu movie
      var movie = movies[i];
      //创建组件 显示电影信息，图像、电影名称、上映时间
      var row = (
        <View
          style = {styles.row}
          key = {i}>
          <Image
            style = {styles.thumbnail}
            source = {{uri:movie.posters.thumbnail}}/>
          <View style = {styles.rightContainer}>
              <Text style = {styles.title}>{movie.title}</Text>
              <Text style = {styles.year}>{movie.year}</Text>
          </View>
        </View>
      );
      movieRows.push(row)
    }

    return(
      <View style = {styles.container}>
        <ScrollView style = {styles.scrollView}>
          {
            //数组：所有的子组件
            movieRows
          }
        </ScrollView>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container : {
    flex : 1
  },
  scrollView : {
    flex : 1,
    marginTop : 25,
    backgroundColor : "#F5F5F5"
  },
  row : {
    flexDirection : "row",
    padding : 5,
    alignItems : "center",
    backgroundColor : "#F5F5F5"
  },
  thumbnail : {
    width : 53,
    height : 81,
    backgroundColor : "gray"
  },

  rightContainer : {
    marginLeft : 10,
    flex : 1,
  },

  title : {
    fontSize : 18,
    marginTop : 3,
    marginBottom : 3,
    textAlign : "center"
  },

  year : {
    marginBottom : 3,
    textAlign : "center"
  }

});

module.exports = LessonMovies;
