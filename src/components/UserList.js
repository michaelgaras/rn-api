import React, { Component } from 'react';
import { ScrollView,Text } from 'react-native';
import axios from 'axios';

import UserDetail from './UserDetail';
import Button from './Button';


class UserList extends Component {

    state = { users: [] }

    // componentDidMount() {
    //     axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //         .then(respone => this.setState({ albums: respone.data }));
    // }

    componentDidMount() {
        // axios.get('https://mlg-blog.herokuapp.com/api/v1/articles')
        //     .then(response => {
        //         console.log('response:');
        //         console.log(response);
        //         this.setState({ articles: response.data });
        //     }).catch(error => console.log(error));

          axios.get('http://mlg-blog.herokuapp.com/api/v1/users')
              .then(response => {
                  console.log('users:');
                  console.log(response);
                  this.setState({ users: response.data });
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
                <Button text='Reload Users' customPress={() => this.reloadUsers()} />
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

export default UserList;
