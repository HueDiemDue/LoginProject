import { AppRegistry } from 'react-native';
import LoginScreen from './app/LoginScreen';
import HomeScreen from './app/HomeScreen';
import DetailSong from './app/DetailSong';
import RegisterScreen from './app/RegisterScreen';
import { StackNavigator } from 'react-navigation';
// import {
//     Text,
//     View
// } from 'react-native';
import React, { Component } from 'react';

const Navigator = StackNavigator(
    {
        Login: LoginScreen,
        Home: HomeScreen,
        Register: RegisterScreen
    }
);
export default class Main extends Component {
    render() {
        return (
            <Navigator />
        );
    }
}

AppRegistry.registerComponent('LoginProject', () => Main);
