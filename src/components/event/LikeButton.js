import React, { useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { JamIcon } from '../../utils/icons/JamIcon';

const LikeButton = () => {
    const [status, setStatus] = useState(false);

    const handleStatus = () => {
        setStatus(!status)
    }

    return (
        <Pressable onPress={handleStatus}>
            <View style={styles.badge}>
                <JamIcon color={status ? '#fe3e78' : '#3b3d56'} name={status ? 'heart-f' : 'heart'} size={18} />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    badge: {
        borderRadius: 100,
        backgroundColor: '#fff',
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})

export default LikeButton;
