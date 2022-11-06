import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';

const Searchbar = () => {
    return (
        <View style={styles.container}>
            <Icon style={styles.icon} name='search1' type='antdesign' color='#3b3d56'/>
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
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#dfdfdf',
        borderRadius: 50
    }
})

export default Searchbar;
