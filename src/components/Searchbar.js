import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Searchbar = () => {
    return (
        <View>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <TextInput style={styles.input} placeholder='Music events, Webinars...' placeholderTextColor='#c8c8d5' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        paddingVertical: 18,
        fontSize: 18,
        borderWidth: 2,
        borderColor: '#dfdfdf',
        borderRadius: 50
    }
})

export default Searchbar;
