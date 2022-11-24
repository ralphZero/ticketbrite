import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { global } from '../../utils/constants';
import FloatingButton from './FloatingButton';
import { JamIcon } from '../../utils/icons/JamIcon';

const FloatingHeader = () => {
    const [status, setStatus] = useState(false);

    const onBackPressed = () => {
        console.log('back!!');
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
        paddingHorizontal: global.size.PADDING,
        backgroundColor: 'transparent',
    }
})

export default FloatingHeader;
