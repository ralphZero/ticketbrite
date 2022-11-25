import React from 'react';
import {ScrollView, Image, StyleSheet, Dimensions} from 'react-native';
import FloatingHeader from '../components/event/FloatingHeader';

const Event = (props) => {
    const { route } = props;
    const url = route.params.cover;

    return (
        <>
            <FloatingHeader {...props} />
            <ScrollView style={styles.container}>
                <Image style={styles.imageBox} source={{uri: url}}/>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
    imageBox: {
        width: '100%',
        height: Dimensions.get('window').height * 0.5,
    }
})

export default Event;
