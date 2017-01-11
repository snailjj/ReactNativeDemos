import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ListView,
  ScrollView
} from 'react-native';

var SearchBar = require("./../common/searchBar");
var Util = require("./../common/tools");
var ServiceUrl = require("./../common/service");
var MovieItem = require("./movie_item");
var MovieWebView = require("./../common/customWebView");

var MovieList = React.createClass({

  getInitialState : function() {
    var ds = new ListView.DataSource({
      rowHasChanged : (oldRow,newRow) => oldRow !== newRow
    });

    return {
      dataSource : ds,
      show : false,
      keywords : "哈利波特"
    };
  },

  _changeText : function(text) {
    this.setState({
      keywords : text
    });
  },

  _showDetail : function(title,url) {
    var detailRoute = {
      component : MovieWebView,
      passProps : {
        backName : "电影",
        title : title,
        url : url
      }
    };

    this.props.navigator.push(detailRoute);

  },

  _searchPress : function() {
    this.getData();
  },

  getData : function() {
    this.setState({
      show : false
    });
    //request
    var that = this;
    var url = ServiceUrl.movie_search + "?count=20&q=" + this.state.keywords;
    Util.getRequest(url,function(data){

      if (!data.subjects || data.subjects.length == 0) {
        return alert("未找到相关电影");
      }

      var ds = new ListView.DataSource({
        rowHasChanged : (oldRow,newRow) => oldRow !== newRow
      });

      var movies = data.subjects;

      that.setState({
        show : true,
        dataSource : ds.cloneWithRows(movies)
      });

    },function(error){
      alert(error);
    });
  },

  render : function() {
    return (
      <ScrollView>
        <SearchBar
          placeholder = "please input movie name"
          onPress = {this._searchPress}
          onChangeText = {this._changeText}/>
        {
          this.state.show ?
            <ListView
              dataSource = {this.state.dataSource}
              initialListSize = {10}
              renderRow = {this._renderRow}
              renderSeparator = {this._renderSeparator}/>
          : Util.loading
        }
      </ScrollView>
    );
  },

  componentDidMount : function() {
    //request data
    this.getData();
  },

  _renderRow : function(movie) {
    return <MovieItem movie = {movie} onPress = {this._showDetail.bind(this,movie.title,movie.alt)}/>
  },

  _renderSeparator : function(sectionID : number,rowID : number) {
    var style = {
      height : 1,
      backgroundColor : "#CCCCCC"
    };

    return <View style = {style} key = {sectionID + rowID}></View>
  }

});

module.exports = MovieList;
