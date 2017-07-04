'use strict';
import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    Dimensions,
    StyleSheet
} from'react-native';
import {styles} from './app.js';
import {StackNavigator} from 'react-navigation';

export class HomeScreen extends React.Component {

  static navigationOptions = {
    title: "Home",
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Thanks for using takeImage_getText!!</Text>
        <Text>First, you take a picture and then you get the text from the picture.</Text>
        <Text>Press the button Below to take a picture.</Text>
        <Button
          onPress = {() => navigate('TakeImage')}
          title="Take Image"
        >
        </Button>
        <Button
          onPress = {() => navigate('ChooseImage')}
          title="Choose Image from Galery"
        >
        </Button>
      </View>
    );
  }
}