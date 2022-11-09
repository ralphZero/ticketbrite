import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Tickets = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Tickets</Text>
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

export default Tickets;
