import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Avatar = () => {
    const url = 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
    return (
        <View>
            <Image source={{uri: url}} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 50,
        width: 50,
        borderRadius: 100,
    }
})

export default Avatar;
