'use strict';
import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    Dimensions,
    StyleSheet
} from 'react-native';
import {styles} from './app.js';
import {StackNavigator} from 'react-navigation';

export class ChooseImage extends React.Component {

  static navigationOptions = {
    title: "Choose Image",
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Select an image</Text>
        <Button
            onPress={() => navigate('Results')}
            title='See Results'
        >
        </Button>
        {/*<Camera
          ref={(cam)=> {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fit} 
          captureMode={Camera.constants.CaptureMode.still}>
          <Text 
            style={styles.capture} 
            onPress={this.takePicture.bind(this)}>Take Picture
          </Text>
        </Camera>*/}
      </View>
    );
  }
}