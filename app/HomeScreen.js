import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { styleLogin } from './style';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        // const { goBack } = this.props.navigation;
        return (
            <View style={styleLogin.main}>
                <TouchableOpacity style={styleLogin.btnLogin}
                    //  onPress={() => this.props.navigation.push('Login')}
                    onPress={() => this.props.navigation.goBack()}>

                    <Text style={styleLogin.txtButton}>Go to Back</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity style={styleLogin.btnLogin}
                    onPress={() => this.props.navigation.navigate('Detail')}>

                    <Text style={styleLogin.txtButton}>Go to Detail Song</Text>
                </TouchableOpacity> */}
            </View>
        );

    }
}