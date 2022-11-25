import React from 'react';
import { StyleSheet, Platform, SafeAreaView as IOSSafeArea } from 'react-native';
import { SafeAreaView as AndroidSafeArea} from 'react-native-safe-area-context';

const Scaffold = ({ children }) => {
    return Platform.OS === 'android' ? (
        <AndroidSafeArea style={styles.container}>
            { children }
        </AndroidSafeArea>
    ) : (
        <IOSSafeArea style={styles.container}>
            { children }
        </IOSSafeArea>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default Scaffold;
