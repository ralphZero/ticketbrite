import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/home/Header';
import Scaffold from '../components/Scaffold';

const Tickets = () => {
    return (
        <Scaffold>
            <Header title="tickets" showUser/>
            <View style={styles.wrapper}>
                <Text>Tickets</Text>
            </View>
        </Scaffold>
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
