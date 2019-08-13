import React, { Component } from 'react';
import { ScrollView,Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import Button from './Button';


class AlbumList extends Component {

    state = { articles: [] }


    componentDidMount() {
        axios.get('https://mlg-blog.herokuapp.com/api/v1/articles')
            .then(response => {
                console.log('response:');
                console.log(response);
                this.setState({ articles: response.data });
            }).catch(error => console.log(error));
    }

    reloadAlbums() {
        axios.get('https://mlg-blog.herokuapp.com/api/v1/articles')
        .then(response => {
            console.log('response:');
            console.log(response);
            this.setState({ articles: response.data });
            this.renderAlbums();
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
                <Button text='Reload Articles' customPress={() => this.reloadAlbums()} />
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
