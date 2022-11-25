import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FloatingHeader from '../components/event/FloatingHeader';

const Event = (props) => {
    return (
        <>
            <FloatingHeader {...props} />
            <View style={styles.container}>
                <Text>Event Page</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    }
})

export default Event;
