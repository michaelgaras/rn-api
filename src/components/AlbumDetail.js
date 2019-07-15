import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album, user }) => {

    const { title, description, artist, gravatar, image, url } = album;
    const {
        albumTitle,
        headerContentStyle,
        imageStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        cardStyle } = styles;

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
                    <Text style={[albumTitle, headerTextStyle]}>{title}</Text>
                    <Text style={albumTitle}>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <View style={headerContentStyle}>
                    <Text style={[albumTitle, headerTextStyle]}>{description}</Text>
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
export default AlbumDetail;
