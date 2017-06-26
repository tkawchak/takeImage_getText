///require dependencies
import React, {Component} from 'react';
import {
  View, 
  Text,
  AppRegistry,
  Button
} from 'react-native';

export default class RootComponent extends Component {

  render() {
    return (
      <View>
        <Text>React Native takeImage_getText!!</Text>
        <Text>Take a Picture and then get text!!</Text>
        <Text>Press the button Below to take a picture.</Text>
        <Button
          onPress={() => this.takePicture()}
          title="Take Picture."
        >
        </Button>
      </View>
    );
  }

  // handle the user taking a picture
  takePicture() {

  }

}