'use strict';
import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    Dimensions,
    StyleSheet
} from 'react-native';
import {styles} from './app.js';
import { StackNavigator } from 'react-navigation';

export class Results extends React.Component {
    static navigationOptions = {
        title: "Results",
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Results from Picture</Text>
            </View>
        );
    }
}