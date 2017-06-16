// require dependencies
import 
  React, 
  {
    Component
  } from 'react';
import {
  AppRegistry
} from 'react-native';

// require sub components
import RootComponent from './src/app.js';

// register the main component
AppRegistry.registerComponent('takeImage_getText', () => RootComponent);