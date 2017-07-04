'use strict';
import React, {Component} from 'react';
import {
  View, 
  Text,
  AppRegistry,
  Button,
  Dimensions,
  StyleSheet
} from 'react-native';
import {StackNavigator} from 'react-navigation';

import {HomeScreen} from './HomeScreen.js';
import {ChooseImage} from './ChooseImage.js';
import {TakeImage} from './TakeImage.js';
import {Results} from './Results.js';

export const App = StackNavigator({
  Home: { screen: HomeScreen },
  TakeImage: { screen: TakeImage },
  ChooseImage: { screen: ChooseImage},
  Results: {screen: Results},
});

export const styles = StyleSheet.create({
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