import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Avatar from './Avatar'

const Header = ({title}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.greetings}>{title === 'home' ? 'Welcome back!' : capitalize(title)}</Text>
                {title === 'home' ? <Avatar /> : null}
            </View>
            {title === 'home' ? <Text style={styles.username}>Ralph Placide</Text> : null}
        </View>
    )
}

const capitalize = (str) => {
    const result = str.charAt(0).toUpperCase() + str.slice(1);
    return result
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