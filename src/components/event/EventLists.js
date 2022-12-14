import React from 'react';
import {View, StyleSheet, FlatList, Dimensions} from 'react-native';
import EventGroupLabel from './EventGroupLabel';
import EventItem from './EventItem';

import { events } from '../../utils/events';
import { values } from '../../utils/constants';


const EventLists = ({ onEventPressed }) => {
    const cardWidth = Dimensions.get('window').width - 64;
    const cardOffsets = events.map((_, index) => {
        return (cardWidth * index) + (8 * index)
    });

    const firstItemPadding = values.size.PADDING;

    return (
        <View>
            <EventGroupLabel title='Popular Event' />
            <FlatList 
                horizontal={true}
                snapToAlignment='start'
                decelerationRate='fast'
                snapToOffsets={cardOffsets}
                data={events} 
                renderItem={({ item }) => (
                    <View style={[styles.container, {paddingStart: item.id === 0 ? firstItemPadding : 0}]}>
                        <EventItem onPress={() => onEventPressed(item)} url={item.cover}/>
                    </View>
                )} 
                keyExtractor={(event) => event.id}
            />
            <EventGroupLabel title='Upcoming Event' />
            <FlatList 
                horizontal={true}
                data={events}
                snapToAlignment='start'
                decelerationRate='fast'
                snapToOffsets={cardOffsets}
                renderItem={({ item }) => (
                    <View style={[styles.container, { paddingStart: item.id === 0 ? firstItemPadding : 0 }]}>
                        <EventItem onPress={() => onEventPressed(item)} url={item.cover}/>
                    </View>
                )} 
                keyExtractor={(event) => event.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - values.size.MARGIN,
        marginEnd: values.size.MARGIN,
    }
})

export default EventLists;
