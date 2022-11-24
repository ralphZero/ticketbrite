import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Event = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Event Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    }
})

export default Event;
