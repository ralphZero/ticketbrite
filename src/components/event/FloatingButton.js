import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { JamIcon } from '../../utils/icons/JamIcon';

const FloatingButton = ({ onPress, children }) => {

    return (
        <Pressable onPress={onPress}>
            <View style={styles.badge}>
                { children }
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    badge: {
        borderRadius: 100,
        backgroundColor: '#ffffffc8',
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})

export default FloatingButton;
