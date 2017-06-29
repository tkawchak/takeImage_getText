'use strict'
///require dependencies
import React, {Component} from 'react';
import {
  View, 
  Text,
  AppRegistry,
  Button,
  Dimensions,
  StyleSheet
} from 'react-native';
import Camera from 'react-native-camera';

export default class RootComponent extends Component {

  render() {
    return (
      <View style={styles.container}>
        {/*<Text>React Native takeImage_getText!!</Text>
        <Text>Take a Picture and then get text!!</Text>
        <Text>Press the button Below to take a picture.</Text>
        <Button
          onPress={() => this.takePicture()}
          title="Take Picture."
        >
        </Button>*/}
        <Camera
          ref={(cam)=> {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>Take Picture</Text>
        </Camera>
      </View>
    );
  }

  // handle the user taking a picture
  takePicture() {
    alert("taking picture!!");
    const options = {};
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});