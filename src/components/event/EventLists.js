import React from 'react';
import {View, StyleSheet, FlatList, Dimensions} from 'react-native';
import EventGroupLabel from './EventGroupLabel';
import EventItem from './EventItem';

import { events } from '../../utils/events';

const EventLists = () => {
    const cardWidth = Dimensions.get('window').width - 64;
    const cardOffsets = events.map((_, index) => {
        return (cardWidth * index) + (18 * index)
    })
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
                    <View style={{ paddingStart: item.id === 0 ? 32 : 0 }}>
                        <EventItem url={item.cover}/>
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
                    <View style={{ paddingStart: item.id === 0 ? 32 : 0 }}>
                        <EventItem url={item.cover}/>
                    </View>
                )} 
                keyExtractor={(event) => event.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default EventLists;
