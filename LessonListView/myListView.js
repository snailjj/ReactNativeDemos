import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

/*
  listView 数据列表
  ListView最重要的是设置行显示的组件，Section，SectionHeader

  使用List.DataSource，给它传递一个普通的数组，再使用dataSource对象实例化一个ListView组件

  ListView实现：row或Section组件定义、设置数据

  设置ListView数据源：
  将dataSource对象设置为state的属性 ListView会根据数据源进行渲染
*/

//原始数据：数组
var contents = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
];

var MyListView = React.createClass({
  getInitialState : function() {
    //创建dataSource对象
    var ds = new ListView.DataSource({
      //通过判断决定渲染哪些行组件，避免全部渲染，提高渲染效率
      rowHasChanged : (oldRow,newRow) => oldRow !== newRow
    });

    return {
      //再设置dataSource时，不直接使用提供的原始数据，使用cloneWithRows对数据源进行复制
      //使用复制后的数据源实例化ListView，好处：当原始数据发生变化时，ListView组件的DataSource不会改变
      dataSource : ds.cloneWithRows(contents)
    };

  },

  //渲染行组件参数是每行要显示的数据对象
  _renderRow : function(rowData : string) {
    return (
      <View style = {styles.row}>
        <Text style = {styles.content}>{rowData}</Text>
      </View>
    );
  },

  render : function() {
    return (
      <ListView
        style = {styles.container}
        dataSource = {this.state.dataSource}
        renderRow = {this._renderRow}/>
    )
  }
});


var styles = StyleSheet.create({
  container : {
    flex : 1,
    marginTop : 25
  },

  row : {
    justifyContent : "center",
    alignItems : "center",
    padding : 5,
    height : 100,
    borderBottomWidth : 1,
    borderColor : "#CCCCCC"
  },

  content : {
    flex : 1,
    fontSize : 20,
    color : "blue",
    lineHeight : 100
  }
});

module.exports = MyListView;
