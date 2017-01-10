import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  Image,
  ScrollView
} from 'react-native';

var ServiceUrl = require("./../common/service");
var Util = require("./../common/tools");
var Header = require("./../common/header");
var BookItem = require("./book_item");

var BookDetail = React.createClass({
  getinitialState : function() {
    return {
        bookData : null //图书对象详细信息
    }
  },
});

var styles = StyleSheet.create({

});

module.exports = BookDetail;
