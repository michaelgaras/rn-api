import React, { Component } from "react";
import { View, Button, Text, ActivityIndicator } from "react-native";
import Input from "./Input";
import Header from "./Header"

export default class LoginForm extends Component {

    state = { username: '', email: '', password: '' }

    renderUserName() {
        if (this.props.title == "Sign Up") { 
            return         (
            <Input
            label="Username"
            placeholder="username"
            value={this.state.username}
            secureTextEntry={false}
            onChangeText={username => this.setState({ username })} 
            /> 
            );
        }
    }

    render() {
    return (
      <View>
        <Header headerText={this.props.title} />
        <Text></Text>
        <Text></Text>
        {this.renderUserName()}
        <Input
          label="Email"
          placeholder="user@mail.com"
          value={this.state.email}
          secureTextEntry={false}
          onChangeText={email => this.setState({ email })}
        />
        <Input
          label="Password"
          placeholder="password"
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
        />
        <Text></Text>
        <Text></Text>
        <Button title={this.props.button}/>

  
    </View>
    );
  }

}