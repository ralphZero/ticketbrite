import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Categories from '../components/categories/Categories';
import EventLists from '../components/event/EventLists';
import Header from '../components/home/Header';
import Searchbar from '../components/Searchbar';

const Home = () => {
    return (
        <ScrollView style={styles.container}>
            <Header showUser={true}/>
            <Searchbar />
            <Categories />
            <EventLists />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default Home;
