import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CategoryItem from './CategoryItem';

import { categories } from '../../utils/categories';

const Categories = () => {
    const renderItem = ({ item }) => (
        <View style={{ paddingStart: item.id === 0 ? 32 : 0 }}>
            <CategoryItem title={item.title} />
        </View>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Event Categories</Text>
            <FlatList

                horizontal={true}
                data={categories}
                renderItem={renderItem}
                keyExtractor={category => category.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 12,
    },
    header: {
        paddingHorizontal: 32,
        color: '#3b3d56',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 24
    }
})

export default Categories;
