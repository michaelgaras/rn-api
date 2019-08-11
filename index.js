import React, { Component } from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

class App extends Component {
    render() {
    return (
        <View>
            <Header headerText={'Articles'} />
            <AlbumList />
        </View>
    );
}
}

// class ArticlesScreen extends Component {
//     render() {
//     return (
//         <View>
//             <Header headerText={'Articles'} />
//         </View>
//     );
// }
// }

// export default createMaterialBottomTabNavigator(
//     {
//         Home: { screen: HomeScreen },
//         ArticlesScreen: { screen: ArticlesScreen } 
//     }
// );

// export default HomeScreen;

AppRegistry.registerComponent('albums', () => App);
