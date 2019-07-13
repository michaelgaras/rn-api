import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    state = { articles: [], users: [] }

    // componentDidMount() {
    //     axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //         .then(respone => this.setState({ albums: respone.data }));
    // }

    componentDidMount() {
        axios.get('https://mlg-blog.herokuapp.com/api/v1/articles')
            .then(response => {
                console.log('response:');
                console.log(response);
                this.setState({ articles: response.data });
            }).catch(error => console.log(error));

          axios.get('http://mlg-blog.herokuapp.com/api/v1/users')
              .then(response => {
                  console.log('response:');
                  console.log(response);
                  this.setState({ users: response.data });
              }).catch(error => console.log(error));

    }

    renderAlbums() {
        return this.state.articles.map(
            album => <AlbumDetail album={album} key={album.title} />
        );
    }

    render() {
        console.log(this.state.articles);
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
