import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

/*

*/

function getRequest(url) {
  var opts = {
    method : "Get"
  }

  fetch(url,opts)
  .then((response) => {
    return response.text()    //返回一个文本对象
  })
  .then((responseText) => {
    alert(responseText)
  })
  .catch((error) => {
    alert(error)
  })
}

/*
  FormData :
  var data = new FormData()
  data.append("Key","Value")
*/
function postRequest(url) {
  //写formData

  let formData = new FormData();
  formData.append("username", "Snail");
  formData.append("password", "Snail");

  var opts = {
    method : "post",
    body : formData
  }

  fetch(url,opts)
  .then((response) => {
    return response.text()
  })
  .then((responseText) => {
    alert(responseText)
  })
  .catch((error) => {
    alert(error)
  })
}

var GetData = React.createClass({
  render : function() {
    return (
      <View style = {styles.container}>
        <TouchableOpacity
          onPress = {getRequest.bind(this,"http://project.lanou3g.com/projects/bj/reactnative/login.php?username=lanou&password=123s")}>
          <View style = {styles.btn}>
            <Text>Get</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress = {postRequest.bind(this,"http://project.lanou3g.com/projects/bj/reactnative/login.php")}>
          <View style = {styles.btn}>
            <Text>Post</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container : {
    flex : 1,
    marginTop : 30,
    backgroundColor : "red",
    flexDirection : "row",
    justifyContent : "center",
    alignItems : "center"
  },

  btn : {
    width : 60,
    height : 30,
    borderWidth : 1,
    borderRadius : 3,
    borderColor : "black",
    backgroundColor : "yellow",
    alignItems : "center"
  }

});

module.exports = GetData;
