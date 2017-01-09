/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';



var LessonTextInput = React.createClass({

  getInitialState : function() {
    return {
      inputText : ""
    };
  },

  //输入框的onChange实现
  getContent : function(text) {
    this.setState({
      inputText : text
    });
  },

  clickBtn : function() {
    alert(this.state.inputText)
  },

  render : function() {
    return(
        <View style = {styles.container}>
          <View style = {styles.flex}>
            <TextInput
              style = {styles.input}
              returnKeyType = "search"
              placeholder = "please seatch reuslt"
              onChangeText = {this.getContent}
            />
          </View>
          <TouchableOpacity
            style = {styles.btn}
            onPress = {this.clickBtn}>
            <Text
              style = {styles.search}>
              Search
            </Text>
          </TouchableOpacity>
        </View>
    );
  }
});

var styles = StyleSheet.create({
  container : {
    flexDirection : "row",
    height : 45,
    marginTop : 25
  },

  flex : {
    flex : 1
  },

  input : {
    height : 45,
    borderWidth : 1,
    marginLeft : 5,
    paddingLeft : 5,
    borderColor : "#CCC",
    borderRadius : 4
  },

  btn : {
    width : 55,
    marginLeft : 5,
    marginRight : 5,
    backgroundColor : "#23BEFF",
    height : 45,
    justifyContent : "center",
    alignItems : "center"
  },

  search : {
    color : "#FFF",
    fontSize : 15,
    fontWeight : "bold"
  }

});



// export default class LessonTextInput extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('LessonTextInput', () => LessonTextInput);
