import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Searchbar from '../components/Searchbar';
import Categories from '../components/categories/Categories';
import { events } from '../utils/events';
import EventItem from '../components/event/EventItem';
import Header from '../components/home/Header';
import Scaffold from '../components/Scaffold';

const Discover = () => {
    return (
        <Scaffold style={styles.wrapper}>
            <Header title="discover" showUser/>
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
        </Scaffold>
    );
}

const styles = StyleSheet.create({
    listItem: {
        marginBottom: 18,
        marginHorizontal: 18,
    }
})

export default Discover;
