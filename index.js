import React from 'react';
import { View, Text, AppRegistry } from 'react-native';

const App = () => {
    return (
        <View>
            <Text>An App</Text>
        </View>
    );
};


AppRegistry.registerComponent('albums', () => App);
