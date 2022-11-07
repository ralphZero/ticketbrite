import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const EventGroupLabel = ({ title, onPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{title}</Text>
            <Pressable onPress={onPress}>
                <Text style={styles.more}>See more</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header: {
        color: '#3b3d56',
        fontSize: 18,
        fontWeight: 'bold',
    },
    more: {
        color: '#3e63f4',
        fontWeight: '700',
    }
})

export default EventGroupLabel;
