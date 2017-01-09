import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
  Image
} from 'react-native';

/*
  展示电影列表，未获得数据时显示等待界面，获取数据时显示电影列表列表

  需要给state添加一个属性，用于记录下载状态
  https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json
*/

var request_url = "https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json"

var MovieList = React.createClass({

  //设置初始状态值
  getInitialState : function() {

    var ds = new ListView.DataSource({
      rowHasChanged : (oldRow,newRow) => oldRow !== newRow
    });

    return {
      loaded : false,   //数据是否下载成功的标示
      dataSource : ds
    }
  },

  //下载数据
  getData : function() {
    fetch(request_url)
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      //刷新组件，重新渲染组件，展示listView 得到新的数据 修改dataSource 更新
      this.setState({
        loaded : true,
        dataSource : this.state.dataSource.cloneWithRows(responseData.movies)
      });
    })
    .catch((error) => {
      alert(error);
    });
  },

  render : function() {
    //如果未请求到数据，提示等待加载页面

    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    //返回电影列表
    return (
      <ListView style = {styles.listView}
        dataSource = {this.state.dataSource}
        initialListSize = {10}
        renderHeader = {this._renderHeader}
        renderRow = {this._renderRow}
        renderSeparator = {this._renderSeparator}/>
    );
  },

  //组件挂载完成
  componentDidMount : function() {
    //开始下载数据
    this.getData();
  },

  renderLoadingView : function() {
    return (
      <View style = {styles.loadingContainer}>
        <Text style = {styles.loadingText}>waiting loading data...</Text>
      </View>
    )
  },
  //渲染行
  _renderRow : function(movie) {
    return (
      <View style = {styles.rowContainer}>
        <Image
          style = {styles.thumbnail}
          source = {{uri : movie.posters.thumbnail}}/>
        <View style = {styles.textContainer}>
          <Text style = {styles.title}>{movie.title}</Text>
          <Text style = {styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  },
  //渲染头部
  _renderHeader : function() {
    return (
      <View style = {styles.header}>
        <Text style = {styles.headerText}>Movie List</Text>
        <View style = {styles.headerSeparator}></View>
      </View>
    );
  },

  //渲染分割线
  _renderSeparator : function(sectionId : number,rowId : number) {
    var style = {
      height : 1,
      backgroundColor : "#CCCCCC"
    };

    return (
      <View style = {style} key = {sectionId + rowId}>

      </View>
    );
  }

});


var styles = StyleSheet.create({
  //loading
  loadingContainer : {
    flex : 1,
    marginTop : 25,
    backgroundColor : "cyan",
    justifyContent : "center",
    alignItems : "center"
  },

  loadingText : {
    fontSize : 30,
    fontWeight : "bold",
    textAlign : "center",
    marginLeft : 10,
    marginRight : 10
  },

  //listView Row
  rowContainer : {
    flexDirection : "row",
    padding : 5,
    alignItems : "center",
    backgroundColor : "#F5FcFF"
  },
  thumbnail : {
    width : 53,
    height : 53,
    backgroundColor : "gray"
  },

  textContainer : {
    flex : 1,
    marginLeft : 10
  },

  title : {
    marginTop : 3,
    fontSize : 18,
    textAlign : "center"
  },

  year : {
    marginTop : 3,
    marginBottom : 3,
    textAlign : "center"
  },

  //header
  header : {
    height : 44,
    backgroundColor : "#F5FcFF"
  },

  headerText : {
    flex : 1,
    fontSize : 20,
    fontWeight : "bold",
    textAlign : "center"
  },

  headerSeparator : {
    height : 1,
    backgroundColor : "#CCCCCC"
  },

  //ListView
  listView : {
    marginTop : 25,
    backgroundColor : "#F5FcFF"
  }

});

module.exports = MovieList;
