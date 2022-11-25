import React, {useState} from 'react';
import {View, StyleSheet, StatusBar, Platform} from 'react-native';
import { values } from '../../utils/constants';
import FloatingButton from './FloatingButton';
import { JamIcon } from '../../utils/icons/JamIcon';

const FloatingHeader = ({ back, navigation }) => {
    const [status, setStatus] = useState(false);

    const onBackPressed = () => {
       return back ? navigation.goBack() : null
    }

    return (
        <View style={styles.container}>
            <FloatingButton onPress={onBackPressed}>
                <JamIcon color='#3b3d56' name='arrow-left' size={18} />
            </FloatingButton>
            <FloatingButton onPress={() => setStatus(!status)}>
                <JamIcon color='#3b3d56' name={status ? 'bookmark-f' : 'bookmark'} size={18} />
            </FloatingButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: values.size.PADDING,
        backgroundColor: 'blue',
        width: '100%',
        zIndex: 10,
    }
})

export default FloatingHeader;
