import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Avatar from './Avatar'

const Header = ({title = 'Welcome back!', showUser = false}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.greetings}>{title}</Text>
                {showUser ? <Avatar /> : null}
            </View>
            {showUser ? <Text style={styles.username}>Ralph Placide</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 32,
        marginBottom: 24,
        marginHorizontal: 18,
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