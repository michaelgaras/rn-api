import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const UserDetail = ({ user }) => {

    const { username, email, gravatar, friends } = user;
    const {
        albumTitle,
        headerContentStyle,
        imageStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        cardStyle } = styles;

    const filtered_friends = friends.join(', ');

    return (
        <Card style={cardStyle}>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: gravatar }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={[albumTitle, headerTextStyle]}>{username}</Text>
                    <Text style={albumTitle}>{email}</Text>
                </View>
            </CardSection>

            <CardSection>
                <View style={headerContentStyle}>
                    <Text style={[albumTitle, headerTextStyle]}>Friends: {filtered_friends}</Text>
                </View>
            </CardSection>
{/* 
            <CardSection>
                <Button text='Read More' customPress={() => Linking.openURL(url)} />
            </CardSection> */}
        </Card>
    );
};

const styles = {
    albumTitle: {
        color: 'black'
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    cardStyle: {
    }
};
export default UserDetail;
