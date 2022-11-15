import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const CategoryItem = ({ title, active = false, onChange }) => {
    return (
        <Pressable onPress={onChange}>
            <View style={[styles.wrapper, active ? { borderColor: '#3f62f1', backgroundColor: '#3f62f1' } : {}]}>
                <Text style={[styles.content, active ? { color: '#ffffff' } : {}]}>{title}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 12,
        borderWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#dfdfdf',
        borderRadius: 50,
        width: 160,
        marginRight: 12,
    },
    content: {
        fontSize: 16,
        color: '#3b3d56',
        fontWeight: '600'
    }
})

export default CategoryItem;
