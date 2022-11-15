import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CategoryItem from './CategoryItem';

import { categories } from '../../utils/categories';

const Categories = ({ showHeader = true }) => {
    const firstItemPadding = 18;
    const [activeIndex, setActiveIndex] = useState(0);

    const onChangeItem = (index) => {
        setActiveIndex(index)
    }

    const renderItem = ({ item, index }) => (
        <View style={{ paddingStart: index === 0 ? firstItemPadding : 0 }}>
            <CategoryItem onChange={() => onChangeItem(index)} active={activeIndex === index ? true : false} title={item.title} />
        </View>
    )

    return (
        <View style={styles.container}>
            {showHeader ? <Text style={styles.header}>Event Categories</Text> : null}
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
        paddingHorizontal: 18,
        color: '#3b3d56',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 24
    }
})

export default Categories;
