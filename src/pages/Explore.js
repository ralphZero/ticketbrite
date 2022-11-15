import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Searchbar from '../components/Searchbar';
import Categories from '../components/categories/Categories';
import { events } from '../utils/events';
import EventItem from '../components/event/EventItem';

const Explore = () => {
    return (
        <View style={styles.wrapper}>
            <FlatList
                ListHeaderComponent={
                    <>
                        <View style={{ marginHorizontal: 18 }}>
                            <Searchbar />
                        </View>
                        <Categories showHeader={false} />
                    </>
                }
                data={events}
                keyExtractor={(event) => event.id}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <EventItem url={item.cover} />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    listItem: {
        marginBottom: 18,
        marginHorizontal: 18,
    }
})

export default Explore;
