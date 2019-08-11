import React, { Component } from 'react';
import { ScrollView,Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import UserDetail from './UserDetail';
import Button from './Button';


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

        //   axios.get('http://mlg-blog.herokuapp.com/api/v1/users')
        //       .then(response => {
        //           console.log('users:');
        //           console.log(response);
        //           this.setState({ users: response.data });
        //       }).catch(error => console.log(error));

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

    reloadUsers() {
        axios.get('https://mlg-blog.herokuapp.com/api/v1/users')
        .then(response => {
            console.log('response:');
            console.log(response);
            this.setState({ users: response.data });
            this.renderUsers();
        }).catch(error => console.log(error));
    }

    renderAlbums() {
        return this.state.articles.map(
            album => <AlbumDetail album={album} key={album.title} />
        );
    }

    renderUsers() {
        return this.state.users.map(
            user => {
                console.log(user);
                // this.setState({ articles: '' });
                return <UserDetail user={user} key={user.id} />;
            }
        );
    }

    render() {
        console.log(this.state.articles);
        return (
            <ScrollView style={styles.layoutStyle}>
                <Button text='Reload Articles' customPress={() => this.reloadAlbums()}></Button>
                <Button text='Reload Users' customPress={() => this.reloadUsers()}></Button>
                {this.renderAlbums()}
                {this.renderUsers()}
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
