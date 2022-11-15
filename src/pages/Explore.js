import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Searchbar from '../components/Searchbar';
import Header from '../components/home/Header';
import Categories from '../components/categories/Categories';
import { events } from '../utils/events';
import EventItem from '../components/event/EventItem';

const Explore = () => {
    return (
        <View style={styles.wrapper}>
            <Header title='Explore' />
            <Searchbar />
            <Categories />
            <View style={styles.list}>
                <FlatList
                    data={events}
                    keyExtractor={(event) => event.id}
                    renderItem={({ item }) => (
                        <View style={styles.listItem}>
                            <EventItem url={item.cover} />
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    list: {
        marginHorizontal: 18,
    },
    listItem: {
        marginBottom: 18
    }
})

export default Explore;
