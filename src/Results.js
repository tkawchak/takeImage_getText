'use strict';
import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    Dimensions,
    StyleSheet,
    Image,
} from 'react-native';
import {styles} from './app.js';
import { StackNavigator } from 'react-navigation';

export class Results extends React.Component {
    static navigationOptions = (navigation) => ({
        title: "Results",
    });

    render() {
        const { navigate, state } = this.props.navigation;
        let params;
        let imageData;
        let imagePath = "none";

        console.log(this.props.navigation);

        // get the image data!!!!
        if (state) {
            params = state.params;
            if (params) {
                imageData = params.data;
                if (imageData) {
                    imagePath = imageData.path;
                }
            }
        }

        /**
         * TODO: retrieve image based on data
         */

        return (
            <View>
                <Text>Results from Picture</Text>
                <Text>Picture storage location: </Text>
                <View>{this.get_imageComponent(imagePath)}</View>
            </View>
        );
    }

    get_imageComponent(imagePath) {
        if (imagePath === "name") {
            return <Image source={require(imageData)} />;
        }
        else {
            return <Text>Error: Could not locate image: {imagePath}</Text>
        }
    }

}