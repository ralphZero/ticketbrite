import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/home/Header';

const Tickets = () => {
    return (
        <>
            <Header title="tickets" showUser/>
            <View style={styles.wrapper}>
                <Text>Tickets</Text>
            </View>
        </>
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
