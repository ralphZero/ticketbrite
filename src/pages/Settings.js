import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Settings = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Settings</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Settings;
