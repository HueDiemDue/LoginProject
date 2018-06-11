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


export default class RegisterScreen extends Component {
	static navigationOptions = {
		title: 'Register User',
	};
	constructor(props) {
		super(props)

		this.state = {
			r_username: '',
			r_password: '',
			r_cfpassword: ''

		}


	}
	_onPressButtonRegister = () => {
		var user_name = this.state.r_username;
		var pass_word = this.state.r_password;
		var cf_pass_word = this.state.r_cfpassword;
		// window.alert(user_name+"_"+pass_word +"_"+cf_pass_word);

		if (user_name === '' || pass_word === '' || cf_pass_word === '') {
			window.alert("Please Enter All the Values");
		}
		else if (pass_word !== cf_pass_word) {
			window.alert("invalid password comfirm");
			this.setState({ r_password: '' });
			this.setState({ r_cfpassword: '' })
		} else {
			var resultCheck = dataLogin.filter(x => x.username === user_name, x => x.password === pass_word);
		
			if (resultCheck.length > 0) {
				if (user_name == resultCheck[0].username) {
					window.alert("Account already exists");
					return;
				}
			} else {
				var str = {
					username: user_name,
					password: pass_word
				}
				dataLogin.push(str);
				// dataLogin.push(...items[username: user_name, password: pass_word]);
				// window.alert(JSON.stringify(dataLogin));
				this.props.navigation.push('Login');
			}

		}

	}
	render() {
		return (
			<View style={styleLogin.main}>
				<Text style={styleLogin.textTitle}>Register User</Text>

				<TextInput
					// value={this.state.r_username}
					placeholder='Tên đăng nhập'
					placeholderTextColor='rgba(0,0,0,0.4)'
					style={styleLogin.input}
					keybroadType="email-address"
					autoFocus={true}
					returnKeyType="done"
					onChangeText={
						(value) => this.setState({ r_username: value })
					}

				/>

				<TextInput
					placeholder='Mật khẩu'
					placeholderTextColor='rgba(0,0,0,0.4)'
					secureTextEntry={true}
					style={styleLogin.input}
					returnKeyType="done"
					// value={this.state.r_password}
					onChangeText={
						(value) => this.setState({ r_password: value })
					}
				/>

				<TextInput
					placeholder='Xác nhận Mật khẩu'
					placeholderTextColor='rgba(0,0,0,0.4)'
					secureTextEntry={true}
					style={styleLogin.input}
					returnKeyType="done"
					// value={this.state.r_cfpassword}
					onChangeText={
						(value) => this.setState({ r_cfpassword: value })
					}
				/>

				<TouchableOpacity style={styleLogin.btnLogin}
					onPress={this._onPressButtonRegister}
				>
					<Text style={styleLogin.txtButton}>Đăng kí</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
