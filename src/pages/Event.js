import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import FloatingHeader from '../components/event/FloatingHeader';
import { values } from '../utils/constants';

const Event = (props) => {
    const { route } = props;
    const url = route.params.cover;

    return (
        <>
            <FloatingHeader {...props} />
            <View style={styles.container}>
                <Image style={styles.imageBox} source={{ uri: url }} />
                <ScrollView alwaysBounceVertical={false} style={styles.details}>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title}>Artistic Museum 2022</Text>
                    </View>
                </ScrollView>
            </View>
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
    },
    details: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        paddingTop: Dimensions.get('window').height * 0.38,
    },
    detailsContainer: {
        minHeight: Dimensions.get('window').height * 0.55,
        backgroundColor: '#fff',
        borderRadius: '15 15 0 0',
        padding: values.size.PADDING,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    }

})

export default Event;
