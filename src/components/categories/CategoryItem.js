import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CategoryItem = ({ title }) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.content}>{title}</Text>
        </View>
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
