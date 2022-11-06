import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Categories from '../components/categories/Categories';
import Header from '../components/home/Header';
import Searchbar from '../components/Searchbar';

const Home = () => {
    return (
        <ScrollView style={styles.container}>
            <Header />
            <Searchbar />
            <Categories />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 32,
    },
})

export default Home;
