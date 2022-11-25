import React, {useState} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import { values } from '../../utils/constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FloatingButton from './FloatingButton';
import { JamIcon } from '../../utils/icons/JamIcon';


const FloatingHeader = ({ navigation }) => {
    const [status, setStatus] = useState(false);
    
    const insets = useSafeAreaInsets();

    const onBackPressed = () => {
       navigation.goBack()
    }

    return (
        <View style={[styles.container, { top: insets.top }]}>
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
        backgroundColor: 'transparent',
        width: '100%',
        zIndex: 10,
        position: 'absolute',
        left: 0,
    }
})

export default FloatingHeader;
