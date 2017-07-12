'use strict';
import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    Dimensions,
    StyleSheet
} from 'react-native';
import Camera from 'react-native-camera';
import {styles} from './app.js';
import {StackNavigator} from 'react-navigation';

export class TakeImage extends React.Component {

  static navigationOptions = {
    title: "Take Image",
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam)=> {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fit} 
          captureMode={Camera.constants.CaptureMode.still}>
          <Text 
            style={styles.capture} 
            onPress={this.takePicture.bind(this, navigate)}>Take Picture
          </Text>
        </Camera>
      </View>
    );
  }

  // handle the user taking a picture
  takePicture(navigate) {
    //alert("taking picture!!");
    const options = {};
    this.camera.capture({metadata: options})
      .then((data) => {
        alert(data.path);
        navigate(
          'Results', 
          {
            data: data,
            practiceData: "hello",
          }
        );
      })
      .catch(err => console.error(err));
  }
}