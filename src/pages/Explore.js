import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Explore = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Explore</Text>
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

export default Explore;
