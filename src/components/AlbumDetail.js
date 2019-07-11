import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    state = { albums: [] }

    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(respone => this.setState({ albums: respone.data }));
    }

    renderAlbums() {
        return this.state.albums.map(
            album => <AlbumDetail album={album} key={album.title} />
        );
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView style={styles.layoutStyle}>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

const styles = {
    layoutStyle: {
        marginBottom: 70
    }
};

export default AlbumList;
