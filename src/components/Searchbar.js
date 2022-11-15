import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { JamIcon } from '../utils/icons/JamIcon';

const Searchbar = () => {
    return (
        <View style={styles.container}>
            <JamIcon style={styles.icon} name='search' size={18} color='#3b3d56'/>
            <TextInput style={styles.input} placeholder='Music events, Webinars...' placeholderTextColor='#c8c8d5' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        paddingVertical: 18,
        fontSize: 18,
    },
    icon: {
        paddingHorizontal: 18,
        
    },
    container: {
        marginVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#dfdfdf',
        borderRadius: 50,
    }
})

export default Searchbar;
