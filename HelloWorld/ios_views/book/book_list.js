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

  render : function() {
    return (
      <ScrollView>
        <SearchBar />
      </ScrollView>
    );
  }

})

var styles = StyleSheet.create({

})

module.exports = BookList;
