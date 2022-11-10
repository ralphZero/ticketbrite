import React from 'react';
import {View, Dimensions, Image, Text, StyleSheet} from 'react-native';
import { Avatar } from 'react-native-elements';
import LikeButton from './LikeButton';

const EventItem = ({ url }) => {
    
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: url}} />
            <View style={styles.overlaylayer}>
                <View style={styles.bagdeGroup}>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>2k participant</Text>
                    </View>
                    <LikeButton />
                </View>
                <View style={styles.card}>
                    <Text style={{ fontWeight: 'bold' }}>Artistics Museum 2022</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
                        <Avatar size={24} rounded source={{uri: "https://randomuser.me/api/portraits/men/35.jpg"}}/>
                        <Text style={{ marginStart: 8, fontSize: 12, fontWeight: 'bold', color: '#3b3d56' }}>Ralph Placide</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 64,
        marginEnd: 18,
    },
    image: {
        flex: 1,
        height: 250,
        borderRadius: 12,
    },
    overlaylayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        padding: 12,
        justifyContent: 'space-between'
    },
    bagdeGroup:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    badge: {
        borderRadius: 100,
        backgroundColor: '#fff',
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    badgeText: {
        fontSize: 12
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
    }
})

export default EventItem;
