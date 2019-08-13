import React, { Component } from 'react';
import { View, AppRegistry, SafeAreaView, Text } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation';
import UserList from './src/components/UserList';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginForm from './src/components/LoginForm';

export default class App extends Component { 
    

    render() {
      return (
        <SafeAreaView style={{ flex: 1 }}>
            < Navigator />
        </SafeAreaView>
      );
    }
}
class ArticlesScreen extends Component {
    render() {
    return (
        <View>
            <Header headerText={'Articles'} />
            <AlbumList />
        </View>
    );
}
}

class UserScreen extends Component {
    render() {
    return (
        <View>
            <Header headerText={'Users'} />
            <UserList />
        </View>
    );
}
}

class SignInScreen extends Component {
  render() {
  return (
    <LoginForm title="Sign In" button="Sign In" />
  );
}
}

class SignUpScreen extends Component {

  render() {
    return (
      <LoginForm title="Sign Up" button="Sign Up" />
    )
  }
}

const Navigator = createMaterialTopTabNavigator(
    {
      Articles: {
        screen: ArticlesScreen,
        navigationOptions: {
          tabBarLabel: 'Articles',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-book" color={tintColor} size={24} />
          )
        }
      },
        Users: { 
          screen: UserScreen,
          navigationOptions: {
            tabBarLabel: 'Users',
            tabBarIcon: ({ tintColor }) => (
              <Icon name="ios-contact" color={tintColor} size={24} />
            )
          } 
        },
        SignIn: { 
          screen: SignInScreen,
          navigationOptions: {
            tabBarLabel: 'Sign In',
            tabBarIcon: ({ tintColor }) => (
              <Icon name="ios-log-in" color={tintColor} size={24} />
            )
          } 
        },
        SignUp: { 
          screen: SignUpScreen,
          navigationOptions: {
            tabBarLabel: 'Sign Up',
            tabBarIcon: ({ tintColor }) => (
              <Icon name="ios-person-add" color={tintColor} size={24} />
            )
          } 
        } 
    },
    {
      order: ['SignUp', 'SignIn', 'Users', 'Articles'],
      tabBarPosition: 'bottom',
      tabBarOptions: {
        style: {
          backgroundColor: '#f2f2f2',
          borderTopWidth: 0.5,
          borderTopColor: 'grey'
        },
        activeTintColor: 'orange',
        inactiveTintColor: 'grey',
        showIcon: true,
      }

    }
);