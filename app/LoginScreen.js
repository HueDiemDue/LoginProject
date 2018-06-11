import React, { Component } from 'react';
import {
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity
} from 'react-native';
import { styleLogin } from './style';
import dataLogin from './fileData';
import sha256 from 'crypto-js/sha256';

export default class LoginScreen extends Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props)

		this.state = {
			username: '',
			password: ''

		}

		// 
	}

	_onPressButtonLogin = () => {
		var user_name = this.state.username;
		var pass_word = this.state.password;

		// console.log(user_name);
		// console.log(pass_word);
		// var result = dataLogin.filter(x => x.username === user_name, x => x.password === pass_word);
		var sha_name = sha256(user_name);
		var sha_pass = sha256(pass_word);
		
		// if (result.length < 0 || result == '') {
		// 	window.alert("Login Failed");
		// } else {
		// 	if(String(sha_name) === String(sha256(result[0].username))){
		// 		window.alert(sha_name + "_" + sha256(result[0].username));
		// 	}

		// }
		// window.alert(JSON.stringify(dataLogin));



		if (user_name === '' || pass_word === '') {
			window.alert("Please Enter All the Values");
			return;
		}
		var result = dataLogin.filter(x => x.username === user_name, x => x.password === pass_word);

		if (result.length < 0 || result == '') {
			window.alert("Login Failed");
			this.setState({ username: '' });
			this.setState({ password: '' });
			return;
		}
		else {
			var d_name = sha256(result[0].username);
			var d_pass = sha256(result[0].password);
			if (String(sha_name) === String(d_name) && String(sha_pass) === String(d_pass)) {
				window.alert("Login Success");
				this.props.navigation.push('Home');
				return;
			} else {
				window.alert("Login Failed");
				this.setState({ username: '' });
				this.setState({ password: '' });
				return;
			}

		}

	}
	_onPressButtonRegister = () => {
		this.props.navigation.push('Register');
	}
	render() {
		return (
			<View style={styleLogin.main}>

				<Image style={styleLogin.logo}
					source={{ uri: 'https://i2.wp.com/technoetics.in/wp-content/uploads/2016/09/reactlogo2.png' }}
				/>

				<TextInput
					placeholder='Tên đăng nhập'
					placeholderTextColor='rgba(0,0,0,0.4)'
					style={styleLogin.input}
					onChangeText={
						(value) => this.setState({ username: value })
					}
					value={this.state.username}
					keybroadType="email-address"
					autoFocus={true}
					returnKeyType="done"
				// onSubmitEditing = {Keyboard.dimiss}
				/>

				<TextInput
					placeholder='Mật khẩu'
					placeholderTextColor='rgba(0,0,0,0.4)'
					// placeholderTextColor="white"
					secureTextEntry={true}
					style={styleLogin.input}
					value={this.state.password}
					onChangeText={(value) => this.setState({ password: value })}
					returnKeyType="done"
				/>

				<TouchableOpacity style={styleLogin.btnLogin} onPress={this._onPressButtonLogin}>
					<Text style={styleLogin.txtButton}>Đăng nhập</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styleLogin.btnLogin}
					onPress={this._onPressButtonRegister}
				>
					<Text style={styleLogin.txtButton}>Đăng kí</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

// var dataLogin = [
// 	{
// 		"username": "Nguyen Thi Hue",
// 		"password": "12345678"
// 	},
// 	{
// 		"username": "admin",
// 		"password": "12345678"
// 	}
// ];
// export default dataLogin;
