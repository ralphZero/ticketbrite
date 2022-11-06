import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Avatar from './Avatar'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.greetings}>Welcome back!</Text>
                <Avatar />
            </View>
            <Text style={styles.username}>Ralph Placide</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 32,
        marginBottom: 24
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    greetings: {
        fontSize: 26,
        fontWeight: '600',
        color: '#3b3d56'
    },
    username: {
        fontSize: 22,
        color: 'darkgrey',
        fontWeight: '500',
    }
})

export default Header