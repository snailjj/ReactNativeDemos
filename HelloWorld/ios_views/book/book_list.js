/*
  图书列表模块：搜索栏，图书列表
  图书列表的内容：通过调用图书搜索接口获得多条图书数据
  图书列表Item是单独封装的
*/

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

var Util = require("./../common/tools");
var SearchBar = require("./../common/searchBar");
var ServiceUrl = require("./../common/service");
var BookItem = require("./book_item");

var BookList = React.createClass({

  getInitialState : function() {
    var ds = new ListView.DataSource({
      rowHasChanged : (oldRow,newRow) => oldRow !== newRow
    });
    return {
      //dataSource
      dataSource : ds,
      //网络请求状态标示
      show : false,
      //搜索关键字 1:搜索接口需要设置搜索内容， 2、点击搜索按钮时，修改关键字内容，重新请求数据，重新渲染
      keywords : "React"
    };
  },

  getData : function() {
    //开启loading 每次搜索时都需要重新下载显示数据
    this.setState({
      show : false
    });

    //请求数据
    var that = this;
    var url = ServiceUrl.book_search + "?count=20&q="+this.state.keywords;
    Util.getRequest(url,function(data){
      //请求成功回调
      /*如果没有数据 alert提示*/

      if (!data.books || data.books.length == 0) {
        return alert("no book")
      }
      //设置下载状态和数据源
      var ds = new ListView.DataSource({
        rowHasChanged : (oldRow,newRow) => oldRow!==newRow
      });
      that.setState({
        show : true,
        dataSource : ds.cloneWithRows(data.books)
      });

    },function(error){
      //请求失败回调
      alert(error);
    })

  },

  //TextInput的onChangedText事件处理方法
  _changeText : function(text) {
    this.setState({
      keywords : text
    });
  },

  _searchPress : function() {
    this.getData();
  },

  render : function() {
    return (
      <ScrollView>
        <SearchBar
          placeholder = "请输入图书的名称"
          onPress = {this._searchPress}
          onChangeText = {this._changeText}/>
        {
          //请求数据时显示loading，数据请求成功后显示listView
          this.state.show ? <ListView
            dataSource = {this.state.dataSource}
            initialListSize = {10}
            renderRow = {this._renderRow}
            renderSeparator = {this._renderSeparator}/>
            :
            Util.loading
        }
      </ScrollView>
    );
  },

  componentDidMount : function() {
    this.getData();
  },

  _renderRow : function(book) {
    return <BookItem book = {book}/>
  },

  _renderSeparator : function(sectionId : number ,rowId : number) {
    var style = {
      height : 1,
      backgroundColor : "#CCCCCC"
    }
    return <View style = {style} key = {sectionId + rowId} />
  }

});

var styles = StyleSheet.create({

})

module.exports = BookList;
