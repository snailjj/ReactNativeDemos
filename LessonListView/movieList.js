import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} from 'react-native';


var movieData = require("./data.json");

//获取所有movies数据 原始数据
var movies = movieData.movies;

var MovieList = React.createClass({

  getInitialState : function() {
    var ds = new ListView.DataSource({
        rowHasChanged : (oldRow,newRow) => oldRow !== newRow
    });
    return {
      dataSource : ds.cloneWithRows(movies)
    }
  },

  //row
  _renderRow : function(movie) {
    return (
      <View style = {styles.row}>
        <Image
          style = {styles.thumbnail}
          source = {{uri : movie.posters.thumbnail}}/>
        <View style = {styles.rightContainer}>
          <Text style = {styles.title}>{movie.title}</Text>
          <Text style = {styles.year}>{movie.year}</Text>
        </View>
      </View>
    )
  },

  //header
  _renderHeader : function() {
    return (
      <View style = {styles.header}>
        <Text style = {styles.header_text}>Movie List</Text>
        <View style = {styles.header_line}></View>
      </View>
    )
  },

  //separator line
  _renderSeparator : function(sectionId : number,rowId : number) {
    return (
        <View
          key = {sectionId + rowId}
          style = {styles.separator}>
        </View>
    )
  },

  render : function() {
    return(
      <ListView
        style = {styles.listView}
        dataSource = {this.state.dataSource}
        renderRow = {this._renderRow}
        renderHeader = {this._renderHeader}
        renderSeparator = {this._renderSeparator}
        //一开始就渲染10行
        initialListSize = {10}/>
    )
  }
});

var styles = StyleSheet.create({
  listView : {
    marginTop : 25,
    flex : 1,
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
    flex : 1
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
  },

  //header
  header : {
    height : 44,
    backgroundColor : "#F5F5F5"
  },
  header_text : {
    flex : 1,
    fontSize : 20,
    fontWeight : "bold",
    textAlign : "center",
    lineHeight : 44
  },

  //header_Line
  header_line : {
    height : 1,
    backgroundColor : "#CCCCCC"
  },

  //sepeator line
  separator : {
    height : 1,
    backgroundColor : "#CCCCCC"
  }

});

module.exports = MovieList;
